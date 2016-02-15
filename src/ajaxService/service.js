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
    let url = GENERAL_CONFIG.baseUrl + '/inventories/invCode/' + bookid;
    return $.getJSON(url);
}

export function getMembyPhone(phone){
    let url = GENERAL_CONFIG.baseUrl + '/members/mob/phone/' + phone;
    return $.getJSON(url);
}

export function getRentedBookOfMember(memberid){
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/' + memberid;
    return $.getJSON(url);
}



export function borrowBook(memberId,bookId,bookName){
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/create';
    let dataStr = 'mId=' + memberId + '&bId=' + bookId + '&status=R';
    return $.ajax({
      url:url,
      type:'POST',
      data:dataStr,
      contentType:"application/x-www-form-urlencoded"
    });
}

export function returnBook(recordId,bookName){
    let url = GENERAL_CONFIG.baseUrl + '/records/mob/return/'+recordId;
    return $.getJSON(url);
}
