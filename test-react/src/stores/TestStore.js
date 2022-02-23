import { observable, action } from 'mobx';

export default class TestStore {
  
 @observable 
  yourStore = 'hello';

  @action changeStoreValue = (value) => {
    this.yourStore = value;
  };
  @action changeToWorld = () => {
  	this.yourStore = "World";
  }
}