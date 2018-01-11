import React from 'react';
import firebaseconfig from '../../global/config';
import { debug } from 'util';
/* global gapi */
class Students extends React.Component {

  constructor() {

    super()
  }

  componentDidMount() {
    // console.log(firebase);
    // firebase.initializeApp(firebaseconfig);
  }
  addStudents = () => {

    let studentName = this.inputVal.value, studList;
    firebase.database().ref('student').on('value',(item)=>{ 
      studList = item.val()
      var addedStudent = Object.keys(studList).filter((student)=>{if(studList[student].email === studentName){return student}})
      if (addedStudent !== '') {
        firebase.database().ref(`teacher/${firebase.auth().currentUser.uid}/students`).on('value', (item)=>{
          var selectedStudList = [item.val()];
          selectedStudList.push(addedStudent.join(''));
          var studentObj={}
          selectedStudList.map((item,index)=>{
            if (item !== null && item!==addedStudent) {
            Object.assign(studentObj, {[index]:item})
            }
          })
          console.log(studentObj, addedStudent);

          firebase.database().ref(`teacher/${firebase.auth().currentUser.uid}`).update({
            students:studentObj
          })
        })
      }
    });
    // studList.filter((student)=>{if (student.email === studentName) {return student} })
    // console.log(studList);
  }
  render() {
    let tid = JSON.parse(localStorage.getItem(localStorage.key('firebase:authUser:')))['uid'];
    return (
      <div className='students-container'>
        <div className='students-list'>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='add-students-container'>
        <button className='add-button' onClick={this.addStudents}>Add</button></div>
        <input ref={(inputVal)=>{this.inputVal=inputVal}} type='textbox'/>
      </div>
    );
  }

}

export default Students