import $ from 'jquery';

const GENERAL_CONFIG = {
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'http://120.25.227.156:8000',
  //baseUrl: 'http://hbg-pre-build.herokuapp.com',
  apiKey: 'xinnix',
  max_number: 999,
  secretKey: 'yundou',
  netTimeout: 6000,
  netTimeoutLong: 6000,
  netErr: '无法连接服务器，请检查你的网络设置后重试',
  serverErr: '服务器'
}

export function getBookbyId(bookid){
  return new Promise((resovle,reject)=>{
    let url = GENERAL_CONFIG.baseUrl + '/inventories/invCode/' + bookid;
    $.getJSON(url,(data,status)=>{
      if(status === 'success'){
        resovle(data);
      }

      // if(status === 'error'){
      //   reject(data);
      //   console.log(status);
      // }
    });
  })
}

export function getMembyPhone(phone){
  return new Promise((resovle,reject)=>{
    let url = GENERAL_CONFIG.baseUrl + '/members/mob/phone/' + phone;
    $.getJSON(url,(data,status)=>{
      if(status === 'success'){
        resovle(data);
      }
    });
  })
}

export function getRentedBookOfMember(memberid){
  return new Promise((resovle,reject)=>{
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/' + memberid;
    $.getJSON(url,(data,status)=>{
      if(status === 'success'){
        resovle(data);
      }
    });
  })
}



export function borrowBook(memberId,bookId,bookName){
  return new Promise((resovle,reject)=>{
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/create';
    let dataStr = 'mId=' + memberId + '&bId=' + bookId + '&status=R';
    $.ajax({
      url:url,
      type:'POST',
      data:dataStr,
      contentType:"application/x-www-form-urlencoded",
      success:(data)=>{
        resovle(data);
      },
      error:(data)=>{
        reject(data);
      }
    });
  })
}


export function returnBook(recordId,bookName){
  return new Promise((resovle,reject)=>{
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/return/'+recordId;
    $.getJSON(url,(data,status)=>{
      if(status === 'success'){
        resovle(data);
      }
    });
  });
}
