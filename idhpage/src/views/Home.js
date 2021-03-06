import React,{Component} from 'react'
import hs from './Home.module.css';
import 'whatwg-fetch';

let postApply = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}


class Home extends Component {

    constructor(props){
        super(props);
        // fetch('https://tt.alpha-brick.com/api/query_ie/?openid=ovWae4mI9lQqyGotJ7mhgjU22hOY&id=2').then(res=>{
        //     console.log('res=>',res)
        // })
    }

    toTest = (e)=>{
        console.log(e)
    }

    render() {
        return (
            <section className={hs.homePage} >
                <section className={hs.pageCon} >
                    <section>
                        <div className={hs.title} ></div>
                        <div className={hs.infow} ></div>
                    </section>
                    <section>
                        <button onClick={this.toTest} className={hs.startbtn} ></button>
                        <div className={hs.blackItem} >
                            <span>听说</span>初雪时要喝啤酒吃炸鸡;
                        </div>
                        <div className={hs.nItem} >
                            听说<span>枸杞红枣茶</span>是办公室交流暗号;
                        </div>
                        <div className={hs.blackItem} >
                            请说喝肥宅快乐水才能<span>做快乐肥宅?</span>
                        </div>
                        <div className={hs.nItem} >
                            来看看<span>最适合你的养身汤</span>都有哪些吧！
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}
export default Home