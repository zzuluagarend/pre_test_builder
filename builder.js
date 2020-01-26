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
     "html": "</html>\n<h1><center>Instructions</center></h1>\n</br>\n</br>\nThis experiment consists of two parts: One online session and one in-lab session. Before starting, I will ask you to generate an ID to link the results of both sessions. Please enter in the textbox below the first two letters of your first name followed by the first two letters of your last name and a random two-digit number (e.g. <i>John Doe</i>, jodo12). Please write this ID down as you will be asked for it during the in-lab session. \n</br>\n</br>\n<p style=\"font-size:20px\">Please enter your ID:</p>\n</html>"
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
     "html": "<html>\nPlease read the instructions below to answer the questions.\n</br>\n</br>\nFor each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe. For example, if the statement is extremely uncharacteristic of you or of what you believe about yourself (not at all like you) please place a \"1\" on the likert scale next to the statement. If the statement is extremely characteristic of you or of what you believe about yourself (very much like you) please place a \"5\" on the likert scale next to the statement. \n</html>"
    },
    {
     "type": "matrix",
     "name": "nfc_test_items",
     "useDisplayValuesInTitle": false,
     "title": "Need for Cognition Test",
     "descriptionLocation": "underTitle",
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Extremely uncharacteristic of me"
      },
      {
       "value": "2",
       "text": "2 Somewhat uncharacteristic of me"
      },
      {
       "value": "3",
       "text": "3 Uncertain"
      },
      {
       "value": "4",
       "text": "4 Somewhat characteristic of me"
      },
      {
       "value": "5",
       "text": "5 Extremely characteristic of me"
      }
     ],
     "rows": [
      {
       "value": "question 1",
       "text": "1. I prefer complex to simple problems."
      },
      {
       "value": "question 2",
       "text": "2. I like to have the responsibility of handling a situation that requires a lot of thinking."
      },
      {
       "value": "question 3",
       "text": "3. Thinking is not my idea of fun."
      },
      {
       "value": "question 4",
       "text": "4. I would rather do something that requires little thought than something that is sure to challenge my thinking abilities."
      },
      {
       "value": "question 5",
       "text": "5. I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something."
      },
      {
       "value": "question 6",
       "text": "6. I find satisfaction in deliberating hard and for long hours."
      },
      {
       "value": "question 7",
       "text": "7. I only think as hard as I have to."
      },
      {
       "value": "question 8",
       "text": "8. I prefer to think about small daily projects to long term ones."
      },
      {
       "value": "question 9",
       "text": "9. I like tasks that require little thought once I’ve learned them."
      },
      {
       "value": "quesiton 10",
       "text": "10. The idea of relying on thought to make my way to the top appeals to me."
      },
      {
       "value": "question 11",
       "text": "11. I really enjoy a task that involves coming up with new solutions to problems."
      },
      {
       "value": "question 12",
       "text": "12. Learning new ways to think doesn’t excite me very much."
      },
      {
       "value": "question 13",
       "text": "13. I prefer my life to be filled with puzzles I must solve."
      },
      {
       "value": "question 14",
       "text": "14. The notion of thinking abstractly is appealing to me."
      },
      {
       "value": "question 15",
       "text": "15. I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought."
      },
      {
       "value": "question 16",
       "text": "16. I feel relief rather than satisfaction after completing a task that requires a lot of mental effort."
      },
      {
       "value": "question 17",
       "text": "17. It’s enough for me that something gets the job done; I don’t care how or why it works."
      },
      {
       "value": "question 18",
       "text": "18. I usually end up deliberating about issues even when they do not affect me personally."
      }
     ]
    }
   ]
  },
  {
   "name": "attitude_scale",
   "elements": [
    {
     "type": "html",
     "name": "question6",
     "html": "Now, I will ask you to rate the items in the below table indicating the extend to which you agree or disagree to each of the topics. For example, if you totally agree with the subject, please place a \"7\" (totally agree) on the likert scale next to it. On the contrary, if you totally disagree with the subject, please place a \"1\" (totally disagree) on the likert scale next to it."
    },
    {
     "type": "matrix",
     "name": "question2",
     "titleLocation": "hidden",
     "columns": [
      {
       "value": "1",
       "text": "1 Strongly Disagree"
      },
	  {
       "value": "2",
       "text": "2 Disagree"
      },
	  {
       "value": "3",
       "text": "3 Somewhat Disagree"
      },
	  {
       "value": "4",
       "text": "4 Uncertain"
      },
	  {
       "value": "5",
       "text": "5 Somewhat Agree"
      },
	  {
       "value": "6",
       "text": "6 Agree"
      },
	  {
       "value": "7",
       "text": "7 Strongly Agree"
      }
     ],
     "rows": [
      "Nuclear Energy",
      "Euthanasia",
      "Vegan Diet",
      "Abortion",
      "Brexit",
      "Cryptocurrencies (e.g. Bitcoin, Litcoin, etc.)",
      "Genetically Modified Organisms (GMO)",
      "Anti-vaxxers (Vaccine hesitancy)",
      "European Union",
      "Homeopathy"
     ],
     "rowsOrder": "random",
     "isAllRowRequired": true
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