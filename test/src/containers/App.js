import React, { PureComponent } from 'react';
 
import * as actions from '../actions';
import { connect } from 'react-redux';
import Setting from '../components/setting';

 
class App extends PureComponent {
    render() {
        const {onCreate,onUpdate} = this.props;
        return (
            <div className="App">
                <Setting
                    onCreate={onCreate}
                    onUpdate={onUpdate}
                />
                {/* {this.props.redux_settingData.setting.map( (key) => { return key.name })}
                <input type='button' onClick={()=>{ this.props._update(1) } }/> */}

            </div>
        );
    }
}
 
const mapToDispatch = (dispatch) =>({
    onCreate: (data)  => dispatch(actions._create(data)),
    onUpdate: (index) => dispatch(actions._update(index))
});
 

// function mapStateToProps(state){
//     console.log("mapStateToProps : ",state);
//     return state;
//   }


export default connect(null, mapToDispatch)(App);

