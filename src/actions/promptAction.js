export const SHOW_ALERT = 'SHOW_ALERT';

export function showAlert(show=false,title='',content=''){
  return {
    type:SHOW_ALERT,
    show,
    title,
    content,
  }
}

export const SHOW_LOADING = 'SHOW_LOADING';

export function showLoading(show=false){
  return {
    type:SHOW_LOADING,
    show
  }

}
