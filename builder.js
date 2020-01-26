function random_string(){
    var crypto = require("crypto");
	var id = crypto.randomBytes(5).toString('hex')
	return id
};

Survey
    .FunctionFactory
    .Instance
    .register("random_string");


Survey
	.StylesManager
	.applyTheme("bootstrap");


var func = '{"r" : Math.random().toString(36).substring(7)}';
var fun = JSON.stringify(func);
 
//const object = JSON.parse('{"foo": ["one", "two", "three"]}')
//object.foo.shuffle() // sort randomly
//JSON.stringify(object)

var surveyJSON = {
 "pages": [
  {
   "name": "welcome_page",
   "elements": [
    {
     "type": "html",
     "name": "question3",
     "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1><center>Welcome!</center></h1>\n<br />\n<br />\n<p>Thank you for taking part in this experiment! The data you will provide here and during the in-lab session will be kept anonymous and only shared with the researches supervising this master thesis.\n<br />\n<br />Please read carefully the instructions and answer the questions fully.</p>\n<br />\n<br />\n</body>\n</html>\n"
    }
   ]
  },
  {
   "name": "id",
   "elements": [
    {
     "type": "html",
     "name": "question1",
     "html": "</html>\n<h1><center>Instructions</center></h1>\n</br>\n</br>\nThis experiment consists of two parts: One online session and one in-lab session. Before starting, I will ask you to generate an ID to link the results of both sessions. Please enter in the textbox below the first two letters of your first name followed by the first two letters of your last name and the two-digit number corresponding to your birthday (e.g. <i>John Doe</i>, jodo12). Please write this ID down as you will be asked for it during the in-lab session. \n</br>\n</br><p style=\"font-size:20px\">Please enter your ID:</p>\n</html>"
    },
    {
     "type": "text",
     "name": "question4",
     "title": "Enter your ID:",
     "isRequired": true,
     "titleLocation": "hidden"
    }
   ]
  },
  {
   "name": "nfc_test",
   "elements": [
    {
     "type": "html",
     "name": "question5",
     "html": "<html>\nPlease read the instructions below to answer the questions.\n</br>\n</br>\nFor each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe. For example, if the statement is extremely uncharacteristic of you or of what you believe about yourself (not at all like you) please place a \"1\" on the likert scale next to the statement. If the statement is extremely characteristic of you or of what you believe about yourself (very much like you) please place a \"5\" on the likert scale next to the statement. \n</br>\n</br>\nYou should use the following scale as you rate each of the statements below.\n</br>\n</br>\n<center><p><b>1-extremely uncharacteristic of me</b>&emsp;<b>2-somewhat uncharacteristic of me</b>&emsp;<b>3-uncertain</b>&emsp;<b>4-somewhat characteristic of me</b>&emsp;<b>5-extremely characteristic of me</b></p></center>\n</html>"
    },
    {
     "type": "matrixdynamic",
     "name": "question7",
     "width": "1800",
     "indent": -6,
     "isRequired": true,
     "titleLocation": "hidden",
     "columns": [
      {
       "name": "q1",
       "title": "1. I prefer complex to simple problems.",
       "isRequired": true
      },
      {
       "name": "q2",
       "title": "2. I like to have the responsibility of handling a situation that requires a lot of thinking.",
       "isRequired": true
      },
      {
       "name": "q3",
       "title": "3. Thinking is not my idea of fun.",
       "isRequired": true
      },
      {
       "name": "q4",
       "title": "4. I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.",
       "isRequired": true
      },
      {
       "name": "q5",
       "title": "5. I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something.",
       "isRequired": true
      },
      {
       "name": "q6",
       "title": "6. I find satisfaction in deliberating hard and for long hours.",
       "isRequired": true
      },
      {
       "name": "q7",
       "title": "7. I only think as hard as I have to.",
       "isRequired": true
      },
      {
       "name": "q8",
       "title": "8. I prefer to think about small daily projects to long term ones.",
       "isRequired": true
      },
      {
       "name": "q9",
       "title": "9. I like tasks that require little thought once I’ve learned them.",
       "isRequired": true
      },
      {
       "name": "q10",
       "title": "10. The idea of relying on thought to make my way to the top appeals to me.",
       "isRequired": true
      },
      {
       "name": "q11",
       "title": "11. I really enjoy a task that involves coming up with new solutions to problems.",
       "isRequired": true
      },
      {
       "name": "q12",
       "title": "12. Learning new ways to think doesn’t excite me very much.",
       "isRequired": true
      },
      {
       "name": "q13",
       "title": "13. I prefer my life to be filled with puzzles I must solve.",
       "isRequired": true
      },
      {
       "name": "q14",
       "title": "14. The notion of thinking abstractly is appealing to me.",
       "isRequired": true
      },
      {
       "name": "q15",
       "title": "15. I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.",
       "isRequired": true
      },
      {
       "name": "q16",
       "title": "16. I feel relief rather than satisfaction after completing a task that requires a lot of mental effort.",
       "isRequired": true
      },
      {
       "name": "q17",
       "title": "17. It’s enough for me that something gets the job done; I don’t care how or why it works.",
       "isRequired": true
      },
      {
       "name": "q18",
       "title": "18. I usually end up deliberating about issues even when they do not affect me personally.",
       "isRequired": true
      }
     ],
     "columnLayout": "vertical",
     "horizontalScroll": true,
     "choices": [
      1,
      2,
      3,
      4,
      5
     ],
     "cellType": "radiogroup",
     "columnColCount": 0,
     "rowCount": 1,
     "minRowCount": 1,
     "maxRowCount": 1
    }
   ]
  },
  {
   "name": "attitude_scale",
   "elements": [
    {
     "type": "html",
     "name": "question6",
     "html": "Now, I will ask you to rate the items in the below table indicating the extend to which you agree or disagree to each of the topics. For example, if you totally agree with the subject, please place a \"7\" (totally agree) on the likert scale next to it. On the contrary, if you totally disagree with the subject, please place a \"1\" (totally disagree) on the likert scale next to it. In case you don't hold an opinion on the topic, please place a \"4\" (uncertain) on the likert scale. \n</br>\n</br>You should use the following scale as you rate each of the statements below.\n</br>\n</br>\n<center><p><b>1-Strongly Disagree</b>&emsp;<b>2-Disagree</b>&emsp;<b>3-Somewhat Disagree</b>&emsp;<b>4-Uncertain</b>&emsp;<b>5-Somewhat Disagree</b>&emsp;<b>6-Agree</b>&emsp;<b>7-Strongly agree</b></p></center>\n</html>"
    },
    {
     "type": "matrixdynamic",
     "name": "question8",
     "titleLocation": "hidden",
     "columns": [
      {
       "name": "a1",
       "title": "Nuclear Energy"
      },
      {
       "name": "a2",
       "title": "Abortion"
      },
      {
       "name": "a3",
       "title": "Vegan Diet"
      },
      {
       "name": "a4",
       "title": "Cryptocurrency"
      },
      {
       "name": "a5",
       "title": "Brexit"
      },
      {
       "name": "a6",
       "title": "European Union"
      },
      {
       "name": "a7",
       "title": "Euthanasia"
      },
      {
       "name": "a8",
       "title": "Anti-vaxxers (Viaccine Hesitancy))"
      },
      {
       "name": "a9",
       "title": "Genetically Modified Organisms (GMO)"
      },
      {
       "name": "a10",
       "title": "Homeopathy"
      }
     ],
     "columnLayout": "vertical",
     "choices": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "cellType": "radiogroup",
     "rowCount": 1,
     "minRowCount": 1,
     "maxRowCount": 1
    }
   ]
  }
 ],
 "showTitle": false
}

// \n    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\n

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model:survey,
    onComplete:sendDataToServer
});


function sendDataToServer(survey) {
    survey.sendResult('92856976-3fe5-40f3-aa6e-1cc56b05942c');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});