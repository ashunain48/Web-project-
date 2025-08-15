document.addEventListener('DOMContentLoaded', () => {
    const qualitySelect = document.getElementById('quality-select');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const resultValue = document.getElementById('result-value');

    function calculateDataUsage() {
        const dataRateGBPerHour = parseFloat(qualitySelect.value);
        const hours = parseFloat(hoursInput.value) || 0;
        const minutes = parseFloat(minutesInput.value) || 0;

        if (hours < 0 || minutes < 0) {
            resultValue.textContent = 'Invalid time';
            return;
        }

        const totalHours = hours + (minutes / 60);
        const totalDataGB = totalHours * dataRateGBPerHour;
        
        if (totalDataGB < 1) {
            const totalDataMB = totalDataGB * 1024;
            resultValue.textContent = `${totalDataMB.toFixed(1)} MB`;
        } else {
            resultValue.textContent = `${totalDataGB.toFixed(2)} GB`;
        }
    }
    
    qualitySelect.addEventListener('change', calculateDataUsage);
    hoursInput.addEventListener('input', calculateDataUsage);
    minutesInput.addEventListener('input', calculateDataUsage);

    // Initial calculation on load
    calculateDataUsage();
});