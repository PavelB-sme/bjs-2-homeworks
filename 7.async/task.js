class AlarmClock {
  constructor (alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if(time === null || callback === undefined) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if(this.alarmCollection.find(alarmTime => alarmTime.time === time)) {
      console.warn('Уже присутствует звонок на это же время');

    }



    this.alarmCollection.push({time: time,
      callback: callback,
      canCall: true,});
  }

  removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter(alarmTime => alarmTime.time !== time);
  }

  getCurrentFormattedTime () {
    const now = new Date()
    const hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    return `${hours}:${minutes}`;
  }

  start (){
    if(this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => this.alarmCollection.forEach((alarmTime) => {
        if (alarmTime.time === this.getCurrentFormattedTime() && alarmTime.canCall === true) {
          alarmTime.canCall = false;
          alarmTime.callback();
        }
      }
    ), 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls () {
    this.alarmCollection.forEach((call) => call.canCall = true);
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection = [];
  }
}

clock = new AlarmClock();
clock.addClock("20:27", f => f);

clock.start();
