const onStartPlay = async () => {
  console.log('onStartPlay');

  const uri = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  await audioRecorderPlayer.startPlayer(uri);

  audioRecorderPlayer.addPlayBackListener((e) => {
    if (e.current_position === e.duration) {
      console.log('finished');
      audioRecorderPlayer.stopPlayer();
    }
    setPlayData({
      currentPositionSec: e.current_position,
      currentDurationSec: e.duration,
      playTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      duration: audioRecorderPlayer.mmssss(Math.floor(e.duration))
    });
  });
};

const onPausePlay = async () => {
  await audioRecorderPlayer.pausePlayer();
};

const onStopPlay = async () => {
  console.log('onStopPlay');
  audioRecorderPlayer.stopPlayer();
  audioRecorderPlayer.removePlayBackListener();
};
