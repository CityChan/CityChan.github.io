const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "stairway to heaven",
        artist: 'Led Zeppelin',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_83826476&response=res&type=convert_url&',
        cover: '',
        autoplay: true,
      }
    ]
});