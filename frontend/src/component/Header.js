import { useParams, NavLink } from 'react-router-dom';

function Header (){

    //urlのパラメータによって表示する遷移アイコンを変更
    const { pageName } = useParams();
    let icon = "";
    if (pageName.indexOf("heart") >= 0){
        icon = (
            // 押されたら画面遷移
            <NavLink to="/message" exact><i class="icon fa-solid fa-comment"></i></NavLink>
        );
    }
    else if (pageName.indexOf("message") >= 0){
        
        icon = (
            // 押されたら画面遷移
            <NavLink to="/heart" exact><i class="icon fas fa-heart"></i></NavLink>     
        );
    }
    
    

    return (
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="/heart" class="navbar-brand d-flex align-items-center">
                <strong clas="my-2">thanksApp</strong>
              </a>

              { icon }

            </div>
          </div>

          
        </header>
    );
}
export default Header;