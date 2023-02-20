let $ = {
  Bilibili: 'https://www.bilibili.com',
  Baidu: 'https://www.baidu.com',
  Youtube: 'https://www.youtube.com/',
  Google: 'https://www.google.com/generate_204',
  Github: 'https://www.github.com'
}

!(async () => {
  let test = Object.keys($).map((key) => [Number(key), obj[key]])
  await Promise.all(test).then((x) => {
    $done({
      title: 'Network Connectivity Test',
      content: x.join('\n'),
      icon: 'timer',
      'icon-color': '#FF5A9AF9',
    })
  })
})();

function http(req) {
  return new Promise((r) => {
    let _req = req[1]
    let time = Date.now();
    $httpClient.post(_req, (err, resp, data) => {
      r(req[0] +
        '\xa0\xa0\xa0\xa0\xa0\t: ' +
        (Date.now() - time) + ' ms');
    });
  });
}
