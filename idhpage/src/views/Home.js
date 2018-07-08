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

    render() {
        return (
            <section className={hs.homePage} >
                <section className={hs.pageCon} >

                </section>
            </section>
        )
    }
}
export default Home