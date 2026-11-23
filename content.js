window.COURSE = {
  id: "radar-from-the-cave-v1",
  title: "Radar!",
  subtitle: "Radar but audible",

  settings: {
    requireAnswerToContinue: false,
    allowRetry: true,
    showHints: true,
    numberTolerance: 0.03,
    saveProgress: true,
  },

  theme: {
    accent: null,
    signal: null,
  },

  analytics: {
    umamiWebsiteId: "10cdc139-2a0f-4805-aa8a-1098edffb3db",
    umamiScript: "https://cloud.umami.is/script.js",
  },

  sections: [
    {
      id: "introduction",
      title: "Introduction",
      steps: [
        {
          type: "text",
          title: "Before you watch",
          body: `[Placeholder: a sentence or two introducing the lesson and what it's about.]

[Placeholder: what learners will be able to do by the end.]

[Placeholder: how the lesson works, for example short clips followed by exercises, then a hands-on activity and a quiz.]

> [Placeholder: anything learners need before starting, such as a calculator.]`,
        },
      ],
    },

    {
      id: "echo",
      title: "1. Echo ranging",
      steps: [
        {
          type: "video",
          title: "Video 1",
          src: "https://youtu.be/TptzGXf_TyA"
        },
        {
          type: "text",
          title: "Key idea: range from echo time",
          body: `A pulse goes out, reflects and comes back. The round trip is twice the distance, so:

$$ R = \\frac{v t}{2} $$

<p class="formula-key">R is range, v is wave speed, t is round-trip time.</p>

- Sound in air: 343 m/s. An echo from a wall 50 m away takes 0.29 s.
- Radio: 300,000,000 m/s. The same echo takes 0.33 µs.
- Each microsecond of radar delay means 150 m of range.`,
        },
        {
          type: "number",
          prompt: "You clap in a cave and hear the echo 0.4 s later. Taking the speed of sound as 343 m/s, how far away is the wall?",
          answer: 68.6,
          unit: "m",
          hint: "The sound travels to the wall and back, so halve the total distance.",
          explain: `$R = 343 × 0.4 / 2 = 68.6$ m.`,
        },
        {
          type: "choice",
          prompt: "A radar echo returns 1 µs after the pulse was sent. How far away is the target?",
          options: ["0.17 mm", "150 m", "300 m", "150 km"],
          answer: 1,
          explain: `$R = (3 × 10^{8} × 1 × 10^{-6}) / 2 = 150$ m. The 0.17 mm option is what sound would travel in the same time.`,
        },
      ],
    },

    {
      id: "waves",
      title: "2. Sound vs radio waves",
      steps: [
        {
          type: "video",
          title: "Video 2",
          src: "https://youtu.be/kqs3jiV1BfY"
        },
        {
          type: "text",
          title: "Key idea: wavelength is resolution",
          body: `Every wave obeys the same relation:

$$ v = f λ $$

Radar and audible sound use similar wavelengths at very different frequencies:

- 23 cm: sound at 1.5 kHz, radio at 1.3 GHz (L-band, long-range surveillance)
- 10 cm: sound at 3.4 kHz, radio at 3 GHz (S-band, air traffic control)
- 3 cm: sound at 11.4 kHz, radio at 10 GHz (X-band, marine and military radar)
- 4 mm: bat calls around 86 kHz, radio at 77 GHz (car radar)

Wavelength sets antenna size, beam width and which objects reflect strongly. Objects much smaller than the wavelength barely reflect.`,
        },
        {
          type: "number",
          prompt: "What frequency of sound in air has a wavelength of 10 cm? (Use 343 m/s.)",
          answer: 3430,
          unit: "Hz",
          hint: "Rearrange v = fλ to get f = v / λ. Remember 10 cm is 0.1 m.",
          explain: `$f = 343 / 0.1 = 3,430$ Hz, or 3.43 kHz. A 3 GHz radar has the same wavelength.`,
        },
        {
          type: "choice",
          prompt: "Why do bats use high-frequency calls to hunt small insects?",
          options: [
            "High-frequency sound travels faster",
            "Objects much smaller than the wavelength barely reflect, so short wavelengths are needed",
            "Insects can't hear high frequencies",
            "High-frequency sound travels further",
          ],
          answer: 1,
          explain: `A moth is a few centimetres across. To get a strong echo the wavelength needs to be similar or smaller, so bats use 20 to 100+ kHz calls, wavelengths of about 17 mm to 3 mm. In fact high frequencies fade faster in air, which is the trade-off.`,
        },
        {
          type: "choice",
          prompt: "Which of these can travel through the vacuum of space?",
          options: ["Sound only", "Radio only", "Both", "Neither"],
          answer: 1,
          explain: `Sound is a pressure wave and needs a medium such as air, water or rock. Radio is electromagnetic and needs none, which is why radar works in space and sonar doesn't.`,
        },
      ],
    },

    {
      id: "pulses",
      title: "3. Pulses",
      steps: [
        {
          type: "video",
          title: "Short pulses, long pulses",
          src: "https://youtu.be/pGxjl1OKWYQ",
          duration: "2:00",
        },
        {
          type: "text",
          title: "Key idea: pulse length sets resolution and blind range",
          body: `Two targets closer together than half a pulse length blur into one echo. A simple radar also can't listen while it's transmitting.

$$ ΔR = \\frac{c τ}{2}     R_{min} ≈ \\frac{c τ}{2} $$

The radar only transmits for a tiny fraction of the time:

$$ D = τ × PRF     P_{avg} = P_{peak} × D $$

<p class="formula-key">τ is pulse length, PRF is pulses per second, D is duty cycle.</p>

> A 1 µs pulse gives 150 m resolution and a 150 m blind zone. At 1,000 pulses a second that's a 0.1% duty cycle, so a 1 MW transmitter averages just 1 kW.`,
        },
        {
          type: "text",
          title: "Pause and try",
          body: `The next three questions use what you've just seen.`,
        },
        {
          type: "number",
          prompt: "An echo returns 200 µs after the pulse. How far away is the target?",
          answer: 30,
          unit: "km",
          hint: "Use R = ct/2 with t = 200 × 10^-6 s, then convert metres to kilometres.",
          explain: `$R = 3 × 10^{8} × 200 × 10^{-6} / 2 = 30,000$ m, which is 30 km.`,
        },
        {
          type: "number",
          prompt: "A radar uses 2 µs pulses. What is its range resolution?",
          answer: 300,
          unit: "m",
          explain: `$ΔR = 3 × 10^{8} × 2 × 10^{-6} / 2 = 300$ m. Its blind range is also about 300 m.`,
        },
        {
          type: "number",
          prompt: "That radar sends 500 pulses a second at 500 kW peak power. What is its average power?",
          answer: 500,
          unit: "W",
          hint: "Find the duty cycle first: pulse length × pulses per second.",
          explain: `Duty cycle $= 2 × 10^{-6} × 500 = 0.001$ (0.1%). Average power $= 500,000 × 0.001 = 500$ W.`,
        },
      ],
    },

    {
      id: "prf",
      title: "4. PRF and range ambiguity",
      steps: [
        {
          type: "video",
          title: "Which clap was that?",
          src: "",
          duration: "1:30",
        },
        {
          type: "text",
          title: "Key idea: the next pulse mustn't leave too early",
          body: `If the next pulse goes out before the last echo returns, the radar can't tell which pulse the echo belongs to.

$$ R_{max} = \\frac{c}{2 · PRF} $$

- 300 Hz: 500 km
- 1 kHz: 150 km
- 10 kHz: 15 km

A strong target beyond $R_{max}$ appears much closer than it really is: a **second-trip echo**. Changing the PRF from burst to burst (stagger) keeps real echoes in place while second-trip echoes jump around.`,
        },
        {
          type: "number",
          prompt: "A radar has a PRF of 1 kHz. What is its maximum unambiguous range?",
          answer: 150,
          unit: "km",
          explain: `$R_{max} = 3 × 10^{8} / (2 × 1,000) = 150,000$ m, which is 150 km.`,
        },
        {
          type: "number",
          prompt: "That same radar sees a mountain 180 km away. At what range does the mountain appear on its display?",
          answer: 30,
          unit: "km",
          hint: "The echo arrives after the next pulse has gone out. Subtract one maximum range.",
          explain: `$180 − 150 = 30$ km. The echo returns after the next pulse has gone, so the radar measures its delay from the wrong pulse.`,
        },
        {
          type: "choice",
          prompt: "How does PRF stagger expose second-trip echoes?",
          options: [
            "Second-trip echoes get louder",
            "Real echoes stay at the same range while second-trip echoes jump around",
            "Second-trip echoes disappear completely",
            "It changes their Doppler shift",
          ],
          answer: 1,
          explain: `A real target's delay from its own pulse doesn't depend on PRF. A second-trip echo's apparent range depends on the gap between pulses, so it moves whenever the PRF changes.`,
        },
      ],
    },

    {
      id: "range",
      title: "5. Range",
      steps: [
        {
          type: "video",
          title: "The problem with range",
          src: "https://youtu.be/5u0gclmiHWI",
          duration: "1:30",
        },
        {
          type: "text",
          title: "Key idea: the echo spreads out twice",
          body: `Power spreads as $1/R^2$ on the way out and again on the way back:

$$ P_r = \\frac{P_t G^2 λ^2 σ}{(4π)^3 R^4} $$

<p class="formula-key">$P_t$ is transmitted power, G is antenna gain, λ is wavelength, σ is radar cross section, R is range.</p>

- Range grows only with the fourth root of power: $R_{max} ∝ P_t^{1/4}$.
- A 1 MW pulse at a 1 m² target 100 km away returns about half a picowatt.
- Radar cross section depends on shape, material and angle, not just size.

> A receiver on the target only suffers $1/R^2$, so it hears the radar long before the radar sees it. That's why radar warning receivers work.`,
        },
        {
          type: "text",
          title: "Pause and try",
          body: `Three questions on scaling. You won't need the full equation, only how each quantity scales.`,
        },
        {
          type: "number",
          prompt: "A target moves from 50 km to 100 km away. How many times weaker is its echo?",
          answer: 16,
          unit: "times",
          explain: `The range doubles, and $2^4 = 16$. In decibels that's −12 dB.`,
        },
        {
          type: "number",
          prompt: "An engineer increases a radar's transmit power 10 times. By what factor does its maximum range increase?",
          answer: 1.78,
          unit: "times",
          hint: "Range scales with the fourth root of power.",
          explain: `$10^{1/4} ≈ 1.78$. Ten times the power buys less than double the range.`,
        },
        {
          type: "number",
          prompt: "Stealth shaping cuts an aircraft's radar cross section by 10,000 times. By what factor does the range at which it's detected shrink?",
          answer: 10,
          unit: "times",
          explain: `Range scales with the fourth root of cross section: $10,000^{1/4} = 10$. A huge reduction in echo gives a much smaller reduction in detection range.`,
        },
        {
          type: "choice",
          prompt: "Why can a radar warning receiver on an aircraft detect a radar before the radar detects the aircraft?",
          options: [
            "It has a bigger antenna than the radar",
            "Its signal only travels one way, so it falls as 1/R² instead of 1/R⁴",
            "It listens on a different frequency",
            "Radio waves speed up as they approach the aircraft",
          ],
          answer: 1,
          explain: `The warning receiver hears the radar's outgoing signal directly. The radar has to wait for an echo that has spread out twice.`,
        },
      ],
    },

    {
      id: "antennas",
      title: "6. Antennas and beamwidth",
      steps: [
        {
          type: "video",
          title: "Pointing the beam",
          src: "",
          duration: "1:30",
        },
        {
          type: "text",
          title: "Key idea: bigger antenna, narrower beam",
          body: `Beamwidth depends on the ratio of wavelength to antenna size:

$$ θ_{3dB} ≈ 70 \\frac{λ}{D} degrees $$

The beam's width at the target's range sets how well the radar separates targets side by side:

$$ Δx ≈ R θ   (θ in radians) $$

- A 1 m dish at 3 cm wavelength gives a beam about 2.1° wide.
- At 10 km, that beam is about 370 m wide, while range resolution might be 15 m.
- Phased arrays steer the beam electronically by delaying each element's signal slightly.`,
        },
        {
          type: "number",
          prompt: "Estimate the beamwidth of a 1 m dish at a wavelength of 3 cm.",
          answer: 2.1,
          unit: "degrees",
          tolerance: 0.05,
          explain: `$θ ≈ 70 × 0.03 / 1 = 2.1°$.`,
        },
        {
          type: "number",
          prompt: "How wide is that 2.1° beam at a range of 10 km?",
          answer: 367,
          unit: "m",
          tolerance: 0.05,
          hint: "Convert degrees to radians first: multiply by π/180.",
          explain: `$2.1° = 0.0367$ rad. $Δx = 10,000 × 0.0367 ≈ 367$ m. That's about 25 times worse than a typical range resolution of 15 m.`,
        },
        {
          type: "choice",
          prompt: "How does a phased array steer its beam without moving?",
          options: [
            "It changes its transmit frequency",
            "It delays each element's signal slightly so the wavefront tilts",
            "It switches off half its elements",
            "It uses a rotating mirror inside the panel",
          ],
          answer: 1,
          explain: `When each element fires slightly later than its neighbour, the combined wavefront leaves at an angle. Changing the delays changes the angle in microseconds. Smart-speaker microphone arrays steer their listening the same way.`,
        },
      ],
    },

    {
      id: "doppler",
      title: "7. Doppler",
      steps: [
        {
          type: "video",
          title: "From sirens to speed guns",
          src: "",
          duration: "2:00",
        },
        {
          type: "text",
          title: "Key idea: a moving target shifts the echo frequency",
          body: `The target receives a shifted signal, then re-radiates it as a moving source, so the shift is doubled:

$$ f_d = \\frac{2 v_r}{λ}     v_r = v cos θ $$

<p class="formula-key">$v_r$ is the speed directly towards or away from the radar. θ is the angle between the target's path and the radar's line of sight.</p>

- A car at 30 m/s seen by a 10 GHz radar shifts by 2 kHz, which is audible.
- That's only two parts in ten million of the carrier. A siren shifts by about 9%.
- The radar mixes the echo with its own signal and hears the difference as a beat, like two guitar strings slightly out of tune.
- A target crossing at right angles has zero Doppler.`,
        },
        {
          type: "number",
          prompt: "A car approaches an X-band radar (wavelength 3 cm) head-on at 30 m/s. What is the Doppler shift?",
          answer: 2000,
          unit: "Hz",
          explain: `$f_d = 2 × 30 / 0.03 = 2,000$ Hz. That's well within human hearing.`,
        },
        {
          type: "choice",
          prompt: "Why is a radar's Doppler shift twice the one-way shift?",
          options: [
            "The radar transmits two pulses",
            "The target receives a shifted signal and then re-radiates it as a moving source, shifting it again",
            "Radio waves travel twice as fast as sound",
            "The antenna doubles the frequency",
          ],
          answer: 1,
          explain: `The motion shifts the signal once on arrival at the target and again when the target sends it back.`,
        },
        {
          type: "choice",
          prompt: "An aircraft flies exactly at right angles to the radar's line of sight. What Doppler shift does the radar measure?",
          options: ["The full shift for its speed", "Half the shift", "Zero", "A negative shift"],
          answer: 2,
          explain: `$cos 90° = 0$, so the radial speed is zero. Some pilots exploit this by flying perpendicular to a radar to hide among stationary clutter.`,
        },
      ],
    },

    {
      id: "sampling",
      title: "8. Doppler sampling",
      steps: [
        {
          type: "video",
          title: "PRF is a sample rate",
          src: "",
          duration: "1:15",
        },
        {
          type: "text",
          title: "Key idea: Nyquist applies to radar",
          body: `A pulsed radar samples each target once per pulse, so Doppler shifts above half the PRF alias:

$$ v_{max} = \\frac{PRF · λ}{4} $$

The range and speed limits trade off directly. For a given wavelength their product is fixed:

$$ R_{max} × v_{max} = \\frac{c λ}{8} $$

- **Low PRF** (up to a few kHz): clear range, ambiguous speed. Used for surveillance and weather.
- **Medium PRF** (roughly 5 to 20 kHz): both ambiguous, resolved by switching between several PRFs.
- **High PRF** (tens to hundreds of kHz): clear speed, very ambiguous range.`,
        },
        {
          type: "text",
          title: "Pause and try",
          body: `Four questions bringing together Doppler, angles and PRF.`,
        },
        {
          type: "number",
          prompt: "A 3 GHz radar (wavelength 10 cm) sees an aircraft approaching head-on at 250 m/s. What is the Doppler shift?",
          answer: 5,
          unit: "kHz",
          explain: `$f_d = 2 × 250 / 0.1 = 5,000$ Hz, which is 5 kHz.`,
        },
        {
          type: "number",
          prompt: "The same aircraft now flies at 60° to the radar's line of sight. What speed does the radar measure?",
          answer: 125,
          unit: "m/s",
          explain: `$v_r = 250 × cos 60° = 125$ m/s, giving a 2.5 kHz shift.`,
        },
        {
          type: "number",
          prompt: "An X-band radar (wavelength 3 cm) uses a 1 kHz PRF. What is the highest speed it can measure without aliasing?",
          answer: 7.5,
          unit: "m/s",
          explain: `$v_{max} = 1,000 × 0.03 / 4 = 7.5$ m/s, slower than a cyclist. Its range is clear to 150 km, though.`,
        },
        {
          type: "choice",
          prompt: "What happens when you raise a radar's PRF?",
          options: [
            "Both its maximum range and maximum speed improve",
            "Its maximum speed improves but its unambiguous range shrinks",
            "Its unambiguous range improves but its maximum speed shrinks",
            "Neither changes",
          ],
          answer: 1,
          explain: `Faster sampling captures higher Doppler shifts, but pulses leave sooner, so echoes from far away get confused with later pulses.`,
        },
      ],
    },

    {
      id: "chirps",
      title: "9. Chirps and pulse compression",
      steps: [
        {
          type: "video",
          title: "Bats did it first",
          src: "",
          duration: "1:30",
        },
        {
          type: "text",
          title: "Key idea: resolution comes from bandwidth",
          body: `Sweep the frequency across a long pulse and the receiver can compress it into a sharp peak. You get the energy of a long pulse with the resolution of a short one:

$$ ΔR = \\frac{c}{2B}     compression ratio = τ B $$

<p class="formula-key">B is the bandwidth swept, τ is the pulse length.</p>

- A 50 µs pulse on its own resolves only 7.5 km. Sweep 5 MHz across it and it resolves 30 m.
- Many bats, including UK pipistrelles, use frequency sweeps for the same reason.
- Car radars send chirps continuously (FMCW). The frequency difference between echo and transmission gives the range.`,
        },
        {
          type: "number",
          prompt: "A radar sends a 50 µs pulse that sweeps 5 MHz. What is its compressed range resolution?",
          answer: 30,
          unit: "m",
          explain: `$ΔR = 3 × 10^{8} / (2 × 5 × 10^{6}) = 30$ m.`,
        },
        {
          type: "number",
          prompt: "What is the compression ratio of that pulse?",
          answer: 250,
          unit: "",
          explain: `$τB = 50 × 10^{-6} × 5 × 10^{6} = 250$. The compressed pulse is 250 times shorter than the transmitted one.`,
        },
        {
          type: "choice",
          prompt: "What sets the range resolution of a chirped pulse?",
          options: ["The pulse length", "The bandwidth swept", "The transmit power", "The antenna size"],
          answer: 1,
          explain: `After compression, resolution depends only on bandwidth: $ΔR = c/2B$. Pulse length now sets the energy, not the resolution.`,
        },
      ],
    },

    {
      id: "close",
      title: "10. Recap",
      steps: [
        {
          type: "video",
          title: "Back to the cave",
          src: "",
          duration: "1:00",
        },
        {
          type: "text",
          title: "What you've covered",
          body: `1. Range comes from echo time: $R = ct/2$.
2. Radar and sound share wavelengths, not frequencies.
3. Short pulses resolve targets; long pulses carry energy.
4. PRF limits the unambiguous range.
5. Echoes weaken as $1/R^4$.
6. Bigger antennas, relative to wavelength, give narrower beams.
7. Doppler measures radial speed, often in the audio range.
8. PRF is a sample rate, so range and speed trade off.
9. Chirps give long-pulse energy with short-pulse resolution.`,
        },
        {
          type: "choice",
          prompt: "Air traffic controllers use secondary surveillance radar alongside primary radar. How does secondary radar locate an aircraft?",
          options: [
            "By listening for the strongest echo",
            "By interrogating a transponder on the aircraft, which sends back a reply",
            "By measuring the aircraft's Doppler shift",
            "By tracking the aircraft's engine heat",
          ],
          answer: 1,
          explain: `Secondary radar isn't an echo system. The aircraft's transponder replies with its identity and altitude. Primary radar is the echo-based system you've been learning about.`,
        },
      ],
    },

    {
      id: "hands-on",
      title: "Hands-on activity",
      steps: [
        {
          type: "text",
          title: "Try it yourself",
          body: `Pick one or more of these activities. You'll need a phone or a laptop. Tick off the steps as you go.`,
        },
        {
          type: "activity",
          title: "Measure an echo",
          body: `Find a large wall or building at least 20 m away, so the echo arrives clearly after the clap.`,
          checklist: [
            "Record yourself clapping once on your phone, facing the wall",
            "Open the recording in Audacity (free) and zoom in on the waveform",
            "Measure the time between the clap and the echo",
            "Calculate the distance with R = vt/2, using 343 m/s",
            "Check your answer with a map or tape measure",
          ],
        },
        {
          type: "activity",
          title: "See the Doppler shift",
          body: `You'll need two devices: one to play a tone, one to show a spectrogram.`,
          checklist: [
            "On one phone, play a steady tone of about 5 kHz from a tone-generator app",
            "On a second device, open a spectrogram app or website",
            "Walk quickly past the spectrogram device holding the tone, or swing the phone on a secure cord",
            "Watch the line rise as the tone approaches and fall as it moves away",
            "Think about it: how would a radar's shift differ? (It's two-way and tiny relative to the carrier)",
          ],
        },
        {
          type: "activity",
          title: "Listen to a chirp",
          body: `In Audacity, use **Generate → Chirp** to make a 1 second sweep from 1 kHz to 5 kHz.`,
          checklist: [
            "Generate the chirp and play it",
            "Switch the track to spectrogram view and see the sloping line",
            "Compare it with a slowed-down bat call recording",
          ],
        },
      ],
    },

    {
      id: "problems",
      title: "Problem set",
      steps: [
        {
          type: "text",
          title: "Putting it together",
          body: `These problems combine ideas from several segments. Use $c = 3 × 10^{8}$ m/s throughout.`,
        },
        {
          type: "number",
          prompt: "You want a 1° beam at 10 GHz. Roughly how wide must the dish be?",
          answer: 2.1,
          unit: "m",
          tolerance: 0.05,
          hint: "Find the wavelength first, then rearrange θ ≈ 70λ/D.",
          explain: `$λ = 3 × 10^{8} / 10^{10} = 0.03$ m. $D ≈ 70 × 0.03 / 1 = 2.1$ m.`,
        },
        {
          type: "number",
          prompt: "Without pulse compression, what range resolution would a 50 µs pulse give?",
          answer: 7.5,
          unit: "km",
          explain: `$ΔR = 3 × 10^{8} × 50 × 10^{-6} / 2 = 7,500$ m. Compression to 30 m is a 250 times improvement.`,
        },
        {
          type: "number",
          prompt: "An X-band radar (3 cm) must measure speeds up to 300 m/s without aliasing. What PRF does it need?",
          answer: 40,
          unit: "kHz",
          hint: "Rearrange v_max = PRF·λ/4.",
          explain: `$PRF = 4 × 300 / 0.03 = 40,000$ Hz, which is 40 kHz.`,
        },
        {
          type: "number",
          prompt: "What is that radar's maximum unambiguous range at 40 kHz?",
          answer: 3.75,
          unit: "km",
          explain: `$R_{max} = 3 × 10^{8} / (2 × 40,000) = 3,750$ m. That's the PRF trade-off: good speed measurement, very short clear range.`,
        },
        {
          type: "number",
          prompt: "A police radar is aimed 20° off a car's path and reads 28.2 m/s. How fast is the car really going?",
          answer: 30,
          unit: "m/s",
          explain: `$v = 28.2 / cos 20° = 28.2 / 0.940 ≈ 30$ m/s. The reading is low, so the cosine effect works in the driver's favour.`,
        },
      ],
    },

    {
      id: "quiz",
      title: "Recap quiz",
      steps: [
        {
          type: "text",
          title: "True or false?",
          body: `Seven quick statements. Each one is a common misconception or a fact that surprises people.`,
        },
        { type: "truefalse", prompt: "Higher-frequency radio waves travel faster.", answer: false, explain: `All radio frequencies travel at the speed of light.` },
        { type: "truefalse", prompt: "If a target's range doubles, its echo becomes 4 times weaker.", answer: false, explain: `It becomes 16 times weaker, because the echo falls as $1/R^4$.` },
        { type: "truefalse", prompt: "A larger object always gives a stronger radar echo.", answer: false, explain: `Shape, material and viewing angle matter more than size. A small corner reflector can outshine an aircraft.` },
        { type: "truefalse", prompt: "Doppler radar measures a target's true speed whatever direction it moves in.", answer: false, explain: `It only measures the speed towards or away from the radar.` },
        { type: "truefalse", prompt: "A pulsed radar can measure both range and speed without ambiguity using a single PRF.", answer: false, explain: `For a given wavelength, $R_{max} × v_{max}$ is fixed. Real radars switch between several PRFs.` },
        { type: "truefalse", prompt: "Radio waves can carry audio, but they are not a kind of sound.", answer: true, explain: `Radio waves are electromagnetic. Audio is carried by modulating them.` },
        { type: "truefalse", prompt: "Some bats use frequency sweeps that work like radar pulse compression.", answer: true, explain: `FM-sweep bats such as pipistrelles get fine range resolution from the bandwidth of their calls.` },
      ],
    },
  ],
};
