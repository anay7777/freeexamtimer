let audioCtx: AudioContext | null = null;

function ctx(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  return audioCtx;
}

export async function resumeAudio(): Promise<void> {
  try {
    const c = ctx();
    if (c.state === 'suspended') {
      await c.resume();
    }
  } catch {
    /* AudioContext might be restricted until user interaction */
  }
}

export function playTone(type: string, volume: number): void {
  if (volume <= 0) return;
  try {
    const c = ctx();
    const now = c.currentTime;

    if (type === 'bell') {
      // Harmonic exam bell (fundamental + octave shimmer)
      [659.25, 1318.5].forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const v = volume * (i === 0 ? 0.8 : 0.3);
        gain.gain.setValueAtTime(v, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 1.8);
      });
    } else if (type === 'gong') {
      // Deep resonant hall gong (traditional exam hall finish)
      [196, 392, 587.33].forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const v = volume * (i === 0 ? 0.9 : 0.35 / (i + 1));
        gain.gain.setValueAtTime(v, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 2.5);
      });
    } else if (type === 'chime') {
      // 3-note ascending chime (C5 - E5 - G5)
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.16);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.setValueAtTime(volume * 0.7, now + i * 0.16);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.16 + 1.1);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now + i * 0.16);
        osc.stop(now + i * 0.16 + 1.1);
      });
    } else if (type === 'buzzer') {
      // Soft gentle buzzer
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);

      gain.gain.setValueAtTime(volume * 0.45, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } else {
      // Standard crisp double-pip beep
      [0, 0.14].forEach((offset) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now + offset);

        gain.gain.setValueAtTime(volume * 0.75, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.1);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.1);
      });
    }
  } catch {
    /* Ignore audio restrictions */
  }
}

export function playAlert(type: string, volume: number): void {
  // Alert sequence when time is up
  playTone(type, volume);
  window.setTimeout(() => playTone(type, volume * 0.85), 450);
}
