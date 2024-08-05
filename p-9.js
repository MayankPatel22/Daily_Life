let timer;
        let StartTime;
        let elapsedTime = 0;
        let isrunning = false;

        function update() {
            const currentTime = Date.now();
            elapsedTime = currentTime - StartTime;

            let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
            let seconds = Math.floor((elapsedTime / 1000) % 60);
            let milliseconds = Math.floor((elapsedTime % 1000) / 10);

            hours = hours.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            milliseconds = milliseconds.toString().padStart(2, '0');

            document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
        }

        function start() {
            if (!isrunning) {
                StartTime = Date.now() - elapsedTime;
                timer = setInterval(update, 10);
                isrunning = true;
            }
        }

        function stop() {
            if (isrunning) {
                clearInterval(timer);
                elapsedTime = Date.now() - StartTime;
                isrunning = false;
            }
        }

        function reset() {
            clearInterval(timer);
            elapsedTime = 0;
            isrunning = false;
            document.getElementById("display").textContent = "00:00:00:00";
        }