
import React from 'react'
Kakao.init('8890a67c089173194979845f9389950d');

const KaKaoLogin = () => {
    
  return (
    Kakao.Auth.login({
        success: function (response) {
          Kakao.API.request({
            url: '/v2/user/me',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
              console.log(error)
            },
          })
        },
        fail: function (error) {
          console.log(error)
        },
      })
  )
}

export default KaKaoLogin;
