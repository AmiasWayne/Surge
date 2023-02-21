const REQUEST_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
  'Accept-Language': 'en',
}

;(async () => {
  let panel_result = {
    title: '连通测试',
    content: '',
    icon: 'touchid',
    'icon-color': '#FF5A9AF9',
  }

  await Promise.all([test_baidu(), test_youtube(), test_github(), test_chatgpt()])
    .then((result) => {
      let content = result.join('')
      panel_result['content'] = content
    })
    .finally(() => {
      $done(panel_result)
    })
})()
///baidu
async function test_taobao() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'www.baidu.com',
        headers: REQUEST_HEADERS,
      }
      baidu_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        baidu_endTime = Date.now()
        resolve('1')
      })
    })
  }

  baidu_test_result =  'BD'+':'
  await inner_check()
    .then((code) => {
      baidu_Delay = baidu_endTime-baidu_startTime + ""
      if (code === '1') {
        baidu_test_result += baidu_Delay + 'ms'+'\xa0\|'
      }
    })
  
  return baidu_test_result
}

//keyyoutube
async function test_youtube() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.youtube.com',
        headers: REQUEST_HEADERS,
      }
      youtube_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        youtube_endTime = Date.now()
        resolve('1')
      })
    })
  }

  youtube_test_result =  '\xa0\YT'+':'
  await inner_check()
    .then((code) => {
      youtube_Delay = youtube_endTime-youtube_startTime + ""
      if (code === '1') {
        youtube_test_result += youtube_Delay + 'ms'+'\xa0\|'
      }
    })
  
  return youtube_test_result
}
////Github
async function test_github() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.github.com',
        headers: REQUEST_HEADERS,
      }
      github_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        github_endTime = Date.now()
        resolve('1')
      })
    })
  }

  github_test_result =  '\xa0\GH'+':'
  await inner_check()
    .then((code) => {
      github_Delay = github_endTime-github_startTime + ""
      if (code === '1') {
        github_test_result += github_Delay + 'ms' +'\xa0\xa0\t '
      }
    })
  
  return github_test_result
}
/////chatgpt
async function test_chatgpt() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://openai.com',
        headers: REQUEST_HEADERS,
      }
      chatgpt_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        chatgpt_endTime = Date.now()
        resolve('1')
      })
    })
  }

  chatgpt_test_result =  'CHATGPT🤖🤖🤖'+':'
  await inner_check()
    .then((code) => {
      chatgpt_Delay = chatgpt_endTime-chatgpt_startTime + ""
      if (code === '1') {
        chatgpt_test_result += chatgpt_Delay + 'ms'
      }
    })
  
  return chatgpt_test_result
}
