import { useParams, useHistory } from 'react-router-dom';

function Header (){

    //urlのパラメータによって表示する遷移アイコンを変更
    const { pageName } = useParams();
    let icon = "";
    if (pageName.indexOf("heart") >= 0) {
        icon = (
            <i class="heart-icon fa-solid fa-comment"></i>
        );
    }
    else if (pageName.indexOf("message") >= 0) {
        icon = (
            <i class="heart-icon fas fa-heart"></i>
        );
    }
    

    return (
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="/heart" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>thanksApp</strong>
              </a>

              { icon }
              
            </div>
          </div>

          
        </header>
    );
}
export default Header;