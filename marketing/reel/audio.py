"""Soundtrack for the vexoro reel: 128 BPM, A minor, 32 beats (15 s), hits synced to the visuals."""
import sys
import numpy as np
from scipy.signal import butter, sosfilt, fftconvolve
from scipy.io import wavfile

SR = 48000
BPM = 128
B = 60 / BPM
DUR = 32 * B + 0.0
N = int(DUR * SR)
rng = np.random.default_rng(3)

L = np.zeros(N); R = np.zeros(N)          # dry mix (drums, effects)
BL = np.zeros(N); BR = np.zeros(N)        # bed: bass, arp, pad (ducked by the kick)
RV = np.zeros(N)                           # reverb send (mono)
SC = np.ones(N)                            # sidechain gain for bass/pads


def at(beat):
    return int(beat * B * SR)


def env_exp(n, tau):
    return np.exp(-np.arange(n) / (tau * SR))


def lp(x, f, order=2):
    return sosfilt(butter(order, f, 'low', fs=SR, output='sos'), x)


def hp(x, f, order=2):
    return sosfilt(butter(order, f, 'high', fs=SR, output='sos'), x)


def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, hi], 'band', fs=SR, output='sos'), x)


def add(sig, beat, gain=1.0, pan=0.0, send=0.0, bed=False):
    i = at(beat)
    if i >= N:
        return
    s = sig[: N - i] * gain
    l, r = (BL, BR) if bed else (L, R)
    l[i:i + len(s)] += s * np.sqrt(0.5 * (1 - pan))
    r[i:i + len(s)] += s * np.sqrt(0.5 * (1 + pan))
    if send:
        RV[i:i + len(s)] += s * send


def note(n):  # MIDI → Hz
    return 440.0 * 2 ** ((n - 69) / 12)


# ---------- instruments ----------
def kick(big=False):
    n = int((0.9 if big else 0.45) * SR)
    t = np.arange(n) / SR
    f = 42 + 120 * np.exp(-t * (28 if not big else 14))
    ph = 2 * np.pi * np.cumsum(f) / SR
    body = np.sin(ph) * env_exp(n, 0.32 if big else 0.16)
    click = hp(rng.standard_normal(n), 2500) * env_exp(n, 0.004) * 0.35
    return np.tanh((body + click) * 1.6) * 0.9


def clap():
    n = int(0.35 * SR)
    noise = bp(rng.standard_normal(n), 900, 5000)
    e = np.zeros(n)
    for d in (0, 0.011, 0.022):
        i = int(d * SR); e[i:] += env_exp(n - i, 0.012 if d < 0.02 else 0.09)
    return noise * e * 0.5


def hat(open_=False):
    n = int((0.22 if open_ else 0.05) * SR)
    return hp(rng.standard_normal(n), 7500, 4) * env_exp(n, 0.06 if open_ else 0.012) * 0.28


def tick(freq=3200):
    n = int(0.06 * SR)
    t = np.arange(n) / SR
    return (np.sin(2 * np.pi * freq * t) * 0.5 + hp(rng.standard_normal(n), 4000) * 0.5) * env_exp(n, 0.008) * 0.5


def blip(f0, f1, dur=0.12):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = f0 * (f1 / f0) ** (t / dur)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env_exp(n, dur / 3) * 0.4


def whoosh(dur, lo=300, hi=6000, rev=False):
    n = int(dur * SR)
    noise = rng.standard_normal(n)
    out = np.zeros(n)
    steps = 24
    for k in range(steps):  # band sweep built from short filtered slices
        a, b = k * n // steps, (k + 1) * n // steps
        x = k / (steps - 1)
        fc = lo * (hi / lo) ** (x if not rev else 1 - x)
        seg_ = bp(noise[max(0, a - 2000):b], fc * 0.6, min(fc * 1.6, SR / 2 - 100))[-(b - a):]
        out[a:b] = seg_
    shape = np.sin(np.linspace(0, np.pi, n)) ** 1.5
    return out * shape * 0.6


def pluck(freq, dur=0.22):
    n = int(dur * SR)
    t = np.arange(n) / SR
    saw = 2 * ((t * freq) % 1) - 1
    sq = np.sign(np.sin(2 * np.pi * freq * 1.003 * t))
    x = lp(saw * 0.6 + sq * 0.3, 2600)
    return x * env_exp(n, 0.07) * 0.22


def bass(freq, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    sub = np.sin(2 * np.pi * freq * t)
    grit = lp(np.tanh(3 * np.sin(2 * np.pi * freq * 2 * t)), 900) * 0.25
    a = np.minimum(1, t / 0.005) * np.minimum(1, (dur - t) / 0.02)
    return (sub + grit) * a * 0.5


def pad(freqs, dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = sum(np.sin(2 * np.pi * f * t + i) + 0.3 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(freqs))
    a = np.minimum(1, t / 0.4) * np.minimum(1, (dur - t) / 1.2)
    return lp(x, 1800) * a * 0.07


def impact():
    n = int(2.4 * SR)
    t = np.arange(n) / SR
    boom = np.sin(2 * np.pi * np.cumsum(30 + 70 * np.exp(-t * 6)) / SR) * env_exp(n, 0.7)
    crash = hp(rng.standard_normal(n), 3000) * env_exp(n, 0.5) * 0.35
    return np.tanh((boom + crash) * 1.4) * 0.9


def riser(dur):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = 200 * (2400 / 200) ** (t / dur)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.25
    noise = hp(rng.standard_normal(n), 1500) * 0.45
    return (tone + noise) * (t / dur) ** 1.4 * 0.7


def duck(beat, depth=0.75, rel=0.16):
    i = at(beat)
    n = min(int(0.3 * SR), N - i)
    if n > 0:
        SC[i:i + n] = np.minimum(SC[i:i + n], 1 - depth * env_exp(n, rel / 3))


# ---------- arrangement (beats) ----------
CHORDS = [(57, [57, 60, 64, 67]), (53, [53, 57, 60, 64]), (48, [55, 60, 64, 67]), (55, [55, 59, 62, 67])]  # Am F C G

# Intro: square pop, blink, streak
add(blip(700, 1400, 0.1), 0.0, 0.8, send=0.3)
add(tick(5200), 0.55, 0.6); add(tick(5200), 0.68, 0.6)
add(whoosh(0.45, 400, 9000), 0.9, 0.7, pan=-0.3, send=0.2)

# Mark wipe + hit + zoom through
add(whoosh(0.55, 200, 5000), 1.9, 0.8, pan=0.3, send=0.25)
add(kick(True), 2.0, 1.0); duck(2.0, 0.9, 0.4)
add(kick(True), 4.0, 0.9); add(clap(), 4.0, 0.9, send=0.5); duck(4.0, 0.9, 0.4)
add(whoosh(0.5, 6000, 300), 5.4, 0.7, send=0.2)

# Groove: four-on-the-floor from beat 6 to 24
for bt in range(6, 24):
    add(kick(), bt, 1.0); duck(bt)
    if bt % 2 == 1:
        add(clap(), bt, 0.9, send=0.35)
    add(hat(), bt + 0.5, 0.9, pan=0.25)
    if 14 <= bt < 18:  # extra 16ths during the fast service list
        add(hat(), bt + 0.25, 0.5, pan=-0.25); add(hat(), bt + 0.75, 0.5, pan=-0.25)
    if bt % 4 == 3:
        add(hat(True), bt + 0.5, 0.6, pan=0.25, send=0.2)

# Bass: 8ths, chord per bar (4 beats), beats 6–24
for bt8 in np.arange(6, 24, 0.5):
    root = CHORDS[int((bt8 - 6) // 4) % 4][0] - 24
    oct_ = 12 if (bt8 * 2) % 4 == 3 else 0
    add(bass(note(root + oct_), B / 2 * 0.9), bt8, 0.8, bed=True)

# Arp: 16ths, beats 10–24
for k, bt16 in enumerate(np.arange(10, 24, 0.25)):
    tones = CHORDS[int((bt16 - 6) // 4) % 4][1]
    add(pluck(note(tones[k % 4] + 12)), bt16, 0.8 if k % 4 == 0 else 0.55, pan=0.35 * np.sin(k), send=0.25, bed=True)

# Word punches
for bt in (6, 7, 8):
    add(tick(2600), bt, 0.7, send=0.2)
for k, bt in enumerate((9, 9.08, 9.16, 9.4)):
    add(tick(3000 + 400 * k), bt, 0.5)
# Giant "websites" pass-by, right to left
add(whoosh(1.15, 250, 4000), 10.0, 0.9, pan=0.5, send=0.15)
add(whoosh(0.9, 4000, 250), 10.6, 0.8, pan=-0.5, send=0.15)
add(blip(500, 1000, 0.08), 12.4, 0.5); add(blip(600, 1200, 0.08), 12.55, 0.5)
# Service swaps
for k in range(6):
    add(tick(2200 + 250 * k), 14.25 + 0.5 * k, 0.6, pan=(-0.4 if k % 2 else 0.4))
# Week blocks light up: rising A-minor pentatonic
for k, m in enumerate([69, 72, 74, 76, 79, 81]):
    add(blip(note(m), note(m) * 1.01, 0.18), 18.9 + 0.4 * k, 0.55, send=0.4)
# "you own" / "everything"
add(tick(2400), 22.0, 0.7); add(tick(2800), 23.0, 0.7)
# Riser and snare roll into the logo
add(riser(2 * B), 24.0, 1.8, send=0.25)
roll = [24 + i * 0.25 for i in range(4)] + [25 + i * 0.125 for i in range(8)]
for k, bt in enumerate(roll):
    add(clap(), bt, 0.45 + 0.08 * k, send=0.2)

# Logo hit and outro
add(impact(), 26.0, 1.0, send=0.5); add(kick(True), 26.0, 1.0); duck(26.0, 0.95, 1.0)
add(pad([note(57), note(60), note(64), note(71)], 6 * B), 26.0, 1.0, send=0.4, bed=True)
add(bass(note(33), 3 * B), 26.0, 0.9, bed=True)
add(blip(900, 1800, 0.12), 28.0, 0.4, send=0.5)
for bt in (27, 28, 29):
    add(hat(), bt + 0.5, 0.35)

# ---------- mix ----------
# Sidechain: only the bed pumps under the kick; drums and effects stay at full level
L += BL * SC; R += BR * SC

ir_n = int(1.6 * SR)
ir = rng.standard_normal(ir_n) * env_exp(ir_n, 0.35)
ir = lp(ir, 5000); ir /= np.abs(ir).sum() ** 0.5 * 18
wet = fftconvolve(hp(RV, 300), ir)[:N]
L += wet; R += np.roll(wet, int(0.012 * SR))

mix = np.stack([L, R], axis=1)
mix = hp(mix.T, 25).T
mix = np.tanh(mix * 1.3) / np.tanh(1.3)
fade = int(0.35 * SR)
mix[-fade:] *= np.linspace(1, 0, fade)[:, None]
mix /= np.abs(mix).max() / 10 ** (-1 / 20)
wavfile.write(sys.argv[1], SR, (mix * 32767).astype(np.int16))
print(f"wrote {sys.argv[1]}: {DUR:.2f}s")
