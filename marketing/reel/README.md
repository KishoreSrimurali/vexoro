# vexoro reel

`../vexoro-reel.mp4`: 15 s Instagram Reel, 1080×1920, 60 fps, H.264 + AAC, -12 LUFS.

- `reel.html`: the animation, drawn on a canvas by `render(t)`; 128 BPM, one beat = 0.46875 s.
- `audio.py`: synthesizes the soundtrack (royalty-free), with hits on the same beats.
- `render.js`: steps `render(t)` frame by frame and pipes frames to ffmpeg.

Re-render (needs Node + Playwright, Python + numpy/scipy, ffmpeg):

```bash
cd marketing/reel
node render.js "$PWD" video 60 15 video.mp4
python3 audio.py track.wav
ffmpeg -i video.mp4 -i track.wav -map 0:v -map 1:a -c:v libx264 -crf 21 -maxrate 13M -bufsize 26M \
  -pix_fmt yuv420p -tune grain -af "loudnorm=I=-13:TP=-1.5" -c:a aac -b:a 256k -shortest \
  -movflags +faststart ../vexoro-reel.mp4
```

`render.js` loads Playwright from `/opt/node-tools/node_modules/playwright`; change that path to `playwright` if you run it elsewhere.
