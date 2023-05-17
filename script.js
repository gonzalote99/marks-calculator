function grading_bang(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_bang').innerHTML = "bangla: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_bang').innerHTML = "bangla: A+"
  }
}

function grading_eng(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_eng').innerHTML = "english: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_eng').innerHTML = "english: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_eng').innerHTML = "english: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_eng').innerHTML = "english: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_eng').innerHTML = "english: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_eng').innerHTML = "english: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_eng').innerHTML = "english: A+"
  }
}

function grading_phy(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_phy').innerHTML = "physics: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_phy').innerHTML = "physics: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_phy').innerHTML = "physics: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_phy').innerHTML = "physics: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_phy').innerHTML = "physics: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_phy').innerHTML = "physics: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_phy').innerHTML = "physics: A+"
  }
}

function grading_bio(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_bio').innerHTML = "biology: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_bio').innerHTML = "biology: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_bio').innerHTML = "biology: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_bio').innerHTML = "biology: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_bio').innerHTML = "biology: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_bio').innerHTML = "biology: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_bio').innerHTML = "physics: A+"
  }
}



function grading_che(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_che').innerHTML = "chemistry: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_che').innerHTML = "chemistry: A+"
  }
}

function grading_reli(number) {
  if(0>number || number > 100) {
    alert('check number')
  }

  else if(0 <=number && number < 33) {
   document.getElementById('res_heading_reli').innerHTML = "religion: you fail";
  }

  else if( 33 <= number && number < 40) {
    document.getElementById('res_heading_reli').innerHTML = "religion: D";
  }

  else if(40 <= number && number < 50) {
    document.getElementById('res_heading_reli').innerHTML = "religion: C";
  }
  else if(50 <= number && number < 60) {
    document.getElementById('res_heading_reli').innerHTML = "religion: B";
  }

  else if(60 <= number && number < 70) {
    document.getElementById('res_heading_reli').innerHTML = "religion: A-";
  }
  else if(70 <= number && number < 80) {
    document.getElementById('res_heading_reli').innerHTML = "religion: A";
  }

  else if(80 <= number && number <= 100 ) {
    document.getElementById('res_heading_reli').innerHTML = "religion: A+"
  }
}