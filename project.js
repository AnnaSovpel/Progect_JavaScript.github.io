const root = document.querySelector('#root');

const main = document.createElement('div');
const mainContainer = document.createElement('div');
const mainContainerDivImg = document.createElement('div');
const mainContainerImg = document.createElement('img');
const mainContainerForm = document.createElement('div');
const mainContainerFormFlex = document.createElement('div');
const mainContainerFormFlexText = document.createElement('div');
const mainContainerFormSingUp = document.createElement('div')
const mainContainerFormInputUser = document.createElement('input');
const mainContainerFormInputPassword = mainContainerFormInputUser.cloneNode(true);
const mainContainerFormMissingEmailWrapper = document.createElement('div');
const mainContainerFormButton = document.createElement('div');
const mainContainerFormForgotUserName = document.createElement('div');
const mainContainerFormForgotUserEmailFormWrapper = document.createElement('div');
const mainContainerFormForgotUserEmailForm = document.createElement('div');
const mainContainerFormForgotUserText = document.createElement('div');
const mainContainerFormForgotUserInput = mainContainerFormInputUser.cloneNode(true);
const mainContainerFormForgotUserEmailFormAnswer = document.createElement('div');
const mainContainerFormForgotUserAnswerText = document.createElement('div');

const mainContainerFormRegestration = document.createElement('div');
const mainContainerFormRegestrationInputFirstName = document.createElement('input');
const mainContainerFormRegestrationInputLastName = mainContainerFormInputUser.cloneNode(true);
const mainContainerFormRegestrationInputDateOfBirth = mainContainerFormInputUser.cloneNode(true);
const mainContainerFormRegestrationInputEmailWrapper = document.createElement('div');
const mainContainerFormRegestrationInputEmail = mainContainerFormInputUser.cloneNode(true);
const mainContainerFormRegestrationEmailHint = document.createElement('div');
const mainContainerRegestrationCountryDivWrapper = document.createElement('div');
const mainContainerRegestrationCountry = mainContainerFormInputUser.cloneNode(true);
const mainContainerRegestrationCountryList = document.createElement('datalist');
const mainContainerRegestrationCountryListBelarus = document.createElement('option');
const mainContainerRegestrationCountryListRussia = mainContainerRegestrationCountryListBelarus.cloneNode(true);
const mainContainerRegestrationReturnBack = document.createElement('div');
const mainContainerRegestrationSubmit = document.createElement('div');
const mainContainerRegestrationPassword = document.createElement('input');
const mainContainerRegestrationPasswordRepeat = mainContainerRegestrationPassword.cloneNode(true);
const mainContainerRegestrationPasswordEyeLabel = document.createElement('label');
const mainContainerRegestrationPasswordTextLabel = document.createElement('span');
const mainContainerRegestrationPasswordEye = document.createElement('input');
const mainContainerRegestrationPassworMessageWrapper = document.createElement('div');
const mainContainerRegestrationPassworMessage = document.createElement('div');

const content = document.createElement('div');
const contentText = document.createElement('div');
const contentTextFood = document.createElement('div');
const contentTextYoga = document.createElement('div');
const contentYogaVideoWrapper = document.createElement('div');
let contentYogaVideo = document.createElement('iframe');
const contentYogaAppend = document.createElement('div');
const contentContainer = document.createElement('div');
const contentContainerFood = document.createElement('div');
const contentContainerFoodText = document.createElement('div');
const contentContainerYoga = document.createElement('div');
const contentContainerYogaText = document.createElement('div');
const contentContainerReyurnBackFromYoga = document.createElement('div');
const contentReturnBack = document.createElement('div');
const contentContainerReturnBack = document.createElement('div')
const contentContainerFoodSelection = document.createElement('div');
const contentContainerFoodSelectionDetoxWrapper = document.createElement('div');
const contentContainerFoodSelectionDetox = document.createElement('div');
const contentContainerCheckDetoxLabel = document.createElement('label');
const contentContainerCheckDetox = document.createElement('input');
const contentContainerCheckDetoxText = document.createElement('span');
const contentContainerDetoxImg = document.createElement('img');
const contentContainerFoodSelectionSimpleFoodWrapper = document.createElement('div');
const contentContainerFoodSelectionSimpleFood = document.createElement('div');

const contentContainerCheckSimpleFoodLabel = contentContainerCheckDetoxLabel.cloneNode(true);
const contentContainerCheckSimpleFood = contentContainerCheckDetox.cloneNode(true);
const contentContainerCheckSimpleFoodText = contentContainerCheckDetoxText.cloneNode(true);
const contentContainerSimpleFoodImg = contentContainerDetoxImg.cloneNode(true);
const contentContainerDetox = document.createElement('div');
const contentContainerDetoxMenu = document.createElement('img');
const contentContainerSimpleMenu = document.createElement('div');
const contentContainerSimpleMenuIMG = contentContainerDetoxImg.cloneNode(true);
const contentContainerReturnBackToThePreviousPage = document.createElement('div');
const contentContainerReturnBackToThePreviousPageFromSimpleMenu = document.createElement('div');

main.classList.add('main')
mainContainer.classList.add('main_container');
mainContainerDivImg.classList.add('main_Container_Div_Img');
mainContainerImg.src = "./pictures/form.jpg";
mainContainerImg.classList.add('main_Container_Img')
mainContainerForm.classList.add('main_container_Form');
mainContainerFormFlex.classList.add('main_container_Form__flex');
mainContainerFormSingUp.classList.add( 'main_container_Form__Sing_Up');
mainContainerFormSingUp.textContent = 'Sing up';
mainContainerFormFlexText.classList.add('main_container_Form__flex__text');
mainContainerFormFlexText.textContent = 'ACCOUNT LOGIN';
mainContainerFormInputUser.placeholder = 'Enter your E-mail';
mainContainerFormInputPassword.placeholder = 'Password';
mainContainerFormInputPassword.type = 'password';
mainContainerFormInputUser.classList.add('main_container_Form_Input');
mainContainerFormInputPassword.classList.add('main_container_Form_Input');
mainContainerFormButton.classList.add('main_container_Form_button');
mainContainerFormMissingEmailWrapper.classList.add('main_container_form_MissingEmailWrapper');
mainContainerFormButton.textContent = 'Sing in';
mainContainerFormForgotUserName.classList.add('main_container_Form_forgot_UN');
mainContainerFormForgotUserName.textContent = 'Forgot your password?';
mainContainerFormForgotUserEmailFormWrapper.classList.add('main_container_Form_Forgot__EmailFormWrapper')
mainContainerFormForgotUserEmailForm.classList.add('main_container_Form_Forgot__EmailForm', 'main_container_Form_Forgot__EmailForm__display');
mainContainerFormForgotUserText.classList.add('main_container_Form_ForgotUserText');
mainContainerFormForgotUserText.textContent = 'Please, Enter your E-mail and we will send you a form to reset your password';
mainContainerFormForgotUserInput.classList.add('main_container_Form_Input');
mainContainerFormForgotUserInput.placeholder = 'Enter your E-mail';
mainContainerFormForgotUserEmailFormAnswer.classList.add('main_container_Form_Forgot__EmailForm');
mainContainerFormForgotUserAnswerText.classList.add('main_container_Form_ForgotUserText', 'main_container_Form_ForgotUser__AnswerText');

                    // REGESTRATION
mainContainerFormRegestration.textContent = 'CREATE AN ACCOUNT';
mainContainerFormRegestrationInputFirstName.classList.add('main_container_Form_Input');
mainContainerFormRegestrationInputLastName.classList.add('main_container_Form_Input');
mainContainerFormRegestrationInputDateOfBirth.classList.add('main_container_Form_Input');
mainContainerFormRegestrationInputEmail.classList.add('main_container_Form_Input');
mainContainerFormRegestrationInputFirstName.placeholder = 'Enter your First Name';
mainContainerFormRegestrationInputLastName.placeholder = 'Enter your Last Name';
mainContainerFormRegestrationInputEmail.placeholder = 'Enter your E-mail';
mainContainerFormRegestrationEmailHint.classList.add('main_container_Email_hint');
mainContainerFormRegestrationInputDateOfBirth.type = 'date';
mainContainerRegestrationCountry.classList.add('main_container_Form_Input');
mainContainerRegestrationCountry.placeholder = 'Enter your country';
mainContainerRegestrationCountry.setAttribute('list', 'cities');
mainContainerRegestrationCountryList.setAttribute('id', 'cities');
mainContainerRegestrationCountryListBelarus.value = 'Canada';
mainContainerRegestrationCountryListRussia.value = 'The States of America';
mainContainerRegestrationPassword.classList.add('main_container_Form_Input');
mainContainerRegestrationPasswordRepeat.classList.add('main_container_Form_Input');
mainContainerRegestrationPassword.placeholder = 'Enter your Password';
mainContainerRegestrationPassword.type = 'password';
mainContainerRegestrationPasswordRepeat.placeholder = 'Repeat your Password';
mainContainerRegestrationPasswordRepeat.type = 'password';
mainContainerRegestrationSubmit.classList.add('main_container_Form_button');
mainContainerRegestrationSubmit.textContent = 'SING UP';
mainContainerRegestrationReturnBack.classList.add('main_container_regestration_return_back');
mainContainerRegestrationReturnBack.innerHTML = '&#9668';
mainContainerRegestrationReturnBack.title = 'go back to the main page';
mainContainerRegestrationPasswordEyeLabel.classList.add('checkbox-transform')
mainContainerRegestrationPasswordEye.type = 'checkbox';
mainContainerRegestrationPasswordEye.classList.add( 'checkbox__input');
mainContainerRegestrationPasswordTextLabel.textContent = 'Show password'
mainContainerRegestrationPasswordTextLabel.classList.add('checkbox__label')
mainContainerRegestrationPassworMessageWrapper.classList.add('main_container_regestration_PassworMessageWrapper', 'main_container_regestration_PassworMessage');
mainContainerRegestrationPassworMessageWrapper.textContent = 'the password can\'t be less than 5 symbols';
mainContainerRegestrationPassworMessage.classList.add('main_container_regestration_PassworMessage');

                    // CONTENT
content.classList.add('content');
contentText.classList.add('content_text')
contentTextYoga.classList.add('content_text')
contentTextFood.classList.add('content_text')
contentContainer.classList.add('content_conteiner');
contentContainerFood.classList.add('content_conteiner_food');
contentContainerYoga.classList.add('content_conteiner_yoga', 'content_conteiner_food');
contentYogaVideoWrapper.classList.add('content_conteiner_yoga_video');
contentYogaVideo.src='https://www.youtube.com/embed/sTANio_2E0Q';
contentTextFood.textContent = 'In the section about food you can find the menu for the day which contains nutritious and healthy meals.';
contentTextYoga.textContent = 'In the section about sport you can find some yoga practice that will help you cope with stress and make your body fit.';
contentContainerFoodText.classList.add('content_conteiner_food_text')
contentContainerFoodText.textContent = 'FOOD';
contentContainerYogaText.classList.add('content_conteiner_food_text')
contentContainerYogaText.textContent = 'SPORT';
contentContainerReyurnBackFromYoga.innerHTML = '&laquo';
contentContainerReyurnBackFromYoga.classList.add('main_container_regestration_return_back', 'content_returnBack');
contentYogaAppend.classList = 'content_conteiner_food_selection';
contentReturnBack.classList.add('main_container_regestration_return_back', 'content_returnBack');
contentReturnBack.innerHTML = '&#8962';
contentContainerReturnBack.classList.add('main_container_regestration_return_back', 'content_returnBack');
contentContainerReturnBack.innerHTML = '&laquo';
contentReturnBack.title = 'go back to the main page';
contentContainerFoodSelection.classList.add('content_conteiner_food_selection');
contentContainerFoodSelection.textContent = 'What would you prefer today?';
contentContainerFoodSelectionDetoxWrapper.classList.add('content_conteiner_food_selection_wrapper');
contentContainerCheckDetoxLabel.classList.add('checkbox-transform');
contentContainerCheckDetoxText.textContent = 'Detox Menu';
contentContainerCheckDetoxText.classList.add('checkbox__label');
contentContainerCheckDetox.type = 'checkbox';
contentContainerCheckDetox.classList.add('checkbox__input');
contentContainerDetoxImg.src = "./pictures/detox_350.jpg";
contentContainerDetoxImg.classList.add('content_conteiner_food_selection__DetoxImg');
contentContainerFoodSelectionSimpleFoodWrapper.classList.add('content_conteiner_food_selection_wrapper')
contentContainerCheckSimpleFoodLabel.classList.add('checkbox-transform');
contentContainerCheckSimpleFoodText.textContent = 'Simple menu';
contentContainerCheckSimpleFoodText.classList.add('checkbox__label')
contentContainerCheckSimpleFood.type = 'checkbox';
contentContainerCheckSimpleFood.classList.add('checkbox__input');
contentContainerSimpleFoodImg.src = "./pictures/simplefood_350.jpg";
contentContainerSimpleFoodImg.classList.add('content_conteiner_food_selection__DetoxImg');
contentContainerReturnBackToThePreviousPage.classList.add('main_container_regestration_return_back', 'content_returnBack');
contentContainerReturnBackToThePreviousPage.innerHTML = '&laquo';
contentContainerDetox.classList.add('content_conteiner_food_selection');
contentContainerDetoxMenu.src = "./pictures/Detox_500.jpg";
contentContainerDetoxMenu.classList.add('content_conteiner_food_selection__DetoxImg', 'content_conteiner_DetoxMenu');
contentContainerSimpleMenuIMG.src = "./pictures/Healty menu_500.jpg";
contentContainerSimpleMenuIMG.classList.add('content_conteiner_food_selection__DetoxImg', 'content_conteiner_DetoxMenu');
contentContainerSimpleMenu.classList.add('content_conteiner_food_selection');
contentContainerReturnBackToThePreviousPageFromSimpleMenu.innerHTML = '&laquo';
contentContainerReturnBackToThePreviousPageFromSimpleMenu.classList.add('main_container_regestration_return_back', 'content_returnBack');

function ShowForgotUserForm (){
    mainContainerFormForgotUserEmailForm.classList.toggle('main_container_Form_Forgot__EmailForm__display');
    mainContainerFormForgotUserEmailForm.classList.add('regestration_block_show');
}
function SendForgotUserForm (event){
    if(event.keyCode == 13){
        mainContainerFormForgotUserEmailFormWrapper.replaceChild(mainContainerFormForgotUserEmailFormAnswer,  mainContainerFormForgotUserEmailForm);
        mainContainerFormForgotUserAnswerText.textContent = `A message to reset your password has been sent to ${mainContainerFormForgotUserInput.value}`;
        setTimeout(() => {
        mainContainerFormForgotUserEmailFormAnswer.classList.add('main_container_Form_Forgot__EmailForm__display')
        location.reload();}, 3000);
    }
}
function ChangePage (event){
    if(event.target.textContent == 'Sing up') {
        mainContainer.replaceChild(mainContainerFormRegestration, mainContainerForm);
    } 
}
function ShowRegestrationBlock() {
    mainContainerFormRegestration.classList.add('regestration_block_show', 'main_container_Form');
}
function ChangePageToThePreviousOne (event){
    if(event.target.classList == 'main_container_regestration_return_back') {
        mainContainer.replaceChild(mainContainerForm, mainContainerFormRegestration);
    } 
}
const FirstName = mainContainerFormRegestrationInputFirstName;
const LastName = mainContainerFormRegestrationInputLastName;
const Email = mainContainerFormRegestrationInputEmail;
const DateOfBirth = mainContainerFormRegestrationInputDateOfBirth;
const Country =  mainContainerRegestrationCountry;
const Password = mainContainerRegestrationPassword;
const PasswordRepeat = mainContainerRegestrationPasswordRepeat;

function CreateUser (FirstName, LastName, Email, DateOfBirth, Country, Password, PasswordRepeat){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.DateOfBirth = DateOfBirth;
    this.Country = Country;
    this.Password = Password;
    this.PasswordRepeat = PasswordRepeat;
}

function CheckingForCompletion(){
    let arr = [mainContainerFormRegestrationInputFirstName, mainContainerFormRegestrationInputLastName, mainContainerFormRegestrationInputEmail, 
            mainContainerFormRegestrationInputDateOfBirth, mainContainerRegestrationCountry, mainContainerRegestrationPassword, 
            mainContainerRegestrationPasswordRepeat]
    for(i=0; i< arr.length; i++){
        if(arr[i].value == ''){
            arr[i].classList.add('input_full');
        } else if(arr[i].value !== ''){
            arr[i].classList.remove('input_full');
        }
    }
    if (mainContainerFormRegestrationInputFirstName.value !== '' && mainContainerFormRegestrationInputLastName.value !== '' && 
            mainContainerFormRegestrationInputEmail.value !== '' && mainContainerFormRegestrationInputDateOfBirth.value  !== '' && 
            mainContainerRegestrationCountry.value !== '' && mainContainerRegestrationPassword.value !== '' && 
            mainContainerRegestrationPasswordRepeat.value !== '' && mainContainerRegestrationPassword.value.length>5 && 
            mainContainerRegestrationPassword.value == mainContainerRegestrationPasswordRepeat.value){
        
    const registeredUsers = [];
    let checkUser = false;
    user = new CreateUser (FirstName.value, LastName.value, Email.value, DateOfBirth.value, Country.value, Password.value, PasswordRepeat.value);
    registeredUsers.push(user)
    const GetUsers = JSON.parse(localStorage.getItem('registered users'));
    if (GetUsers == null){
        localStorage.setItem('registered users', JSON.stringify(registeredUsers));
        contentText.textContent = `Hello, ${FirstName.value}! Thank you for registration! Pick the category and let\'s start changes for the better!`;
        mainContainer.replaceChild(content, mainContainerDivImg);
        mainContainer.replaceChild(contentContainer, mainContainerFormRegestration);
        mainContainer.classList.add('regestration_block_show')
    }else {
        for (i = 0; i < GetUsers.length; i++){
            if (GetUsers[i].Email === Email.value) {
            checkUser = true;
            mainContainerFormRegestrationEmailHint.innerHTML = 'A user with this E-mail exists &#9993';
            mainContainerFormRegestrationInputEmail.classList.add('input_full')
            break;
            } else {
                checkUser = false
            }
        }
        if(checkUser == false){
            GetUsers.push(user);
            localStorage.setItem('registered users', JSON.stringify(GetUsers));
            contentText.textContent = `Hello, ${GetUsers[i].FirstName}! Thank you for registration! Pick the category and let\'s start changes for the better!`;
            mainContainer.replaceChild(content, mainContainerDivImg);
            mainContainer.replaceChild(contentContainer, mainContainerFormRegestration);
            mainContainer.classList.add('regestration_block_show')
            console.log(GetUsers);
        }
        }
    }
}
function CheckingPasswordsForCompletion(){
    let pas = mainContainerRegestrationPassword.value;
    let pasRepeat = mainContainerRegestrationPasswordRepeat.value;
    for (let i = 0; i < pas.length; i++){
        if(pas[i] == pasRepeat[i]) {
            mainContainerRegestrationPassworMessage.innerHTML = 'the passwords match &#x2714';
            mainContainerRegestrationPassworMessage.style.color = 'green';
        } else {
            mainContainerRegestrationPassworMessage.innerHTML = 'passwords don\'t match &#x2718';
            mainContainerRegestrationPassworMessage.style.color = 'red';
        }
    }
}
function CheckingPasswordsRepeatForCompletion(){
    let pas = mainContainerRegestrationPassword.value;
    let pasRepeat = mainContainerRegestrationPasswordRepeat.value;
    for (let i = 0; i < pasRepeat.length; i++){
        if(pas[i] == pasRepeat[i] && pas !== pasRepeat) {
            mainContainerRegestrationPassworMessage.innerHTML = 'passwords don\'t match &#x2718';
            mainContainerRegestrationPassworMessage.style.color = 'red';
        } else if(pas[i] == pasRepeat[i]){
            mainContainerRegestrationPassworMessage.innerHTML = 'the passwords match &#x2714';
            mainContainerRegestrationPassworMessage.style.color = 'green';
        } else {
            mainContainerRegestrationPassworMessage.innerHTML = 'passwords don\'t match &#x2718';
            mainContainerRegestrationPassworMessage.style.color = 'red';
        }
    }   if(pasRepeat.length <= 5){
            mainContainerRegestrationPassworMessageWrapper.style.color = 'red'
        } else if (pasRepeat.length > 5){
            mainContainerRegestrationPassworMessageWrapper.style.color ='';
        }
}
   
function ShowPassword (){
    if (mainContainerRegestrationPasswordEye.checked){
        mainContainerRegestrationPassword.type = 'text';
        mainContainerRegestrationPasswordRepeat.type = 'text';
    } else {
        mainContainerRegestrationPassword.type = 'password';
        mainContainerRegestrationPasswordRepeat.type = 'password';
    }
}

function LogIn(){
    let checkEmail = false;
    const GetUsers = JSON.parse(localStorage.getItem('registered users'));
    if(GetUsers !== null){
        for (i = 0; i < GetUsers.length; i++){
            if (GetUsers[i].Email === mainContainerFormInputUser.value) {
                checkEmail = true;
                break;
            } else {
                checkEmail = false;
            }
        }
    }
    if(checkEmail == true){
        if(GetUsers[i].Password == mainContainerFormInputPassword.value){
            console.log('Password confirmed');
            contentText.textContent = `Hello, ${GetUsers[i].FirstName}! We are glad to see you! Pick the category and let\'s start changes for 
            the better!`;
            mainContainer.replaceChild(content, mainContainerDivImg);
            mainContainer.replaceChild(contentContainer, mainContainerForm);
            mainContainer.classList.add('regestration_block_show');
        } else {
            mainContainerFormMissingEmailWrapper.classList.add('regestration_block_show');
            mainContainerFormMissingEmailWrapper.textContent = 'you entered an invalid password';
        }
    }
    if(checkEmail == false){
        if (mainContainerFormInputPassword.value == '' || mainContainerFormInputUser.value == ''){
            mainContainerFormMissingEmailWrapper.textContent = '';
        } else if (mainContainerFormInputPassword.value !== '' || mainContainerFormInputUser.value !== ''){
            mainContainerFormMissingEmailWrapper.classList.add('regestration_block_show');
            mainContainerFormMissingEmailWrapper.textContent = 'there is no user with this email address';
        } else if(mainContainerFormInputPassword.value == ''){
            mainContainerFormMissingEmailWrapper.classList.add('regestration_block_show');
            mainContainerFormMissingEmailWrapper.textContent = 'please, enter your password';
        }
    }
}
function FoodSelection (){
    mainContainer.replaceChild(contentContainerFoodSelection, contentContainer);
    contentContainerFoodSelection.classList.add('regestration_block_show');
    contentText.textContent='';
    contentTextFood.textContent = 'Detox is a special food system designed to eliminate toxic and harmful compounds from the body.Detox food includes vegetables, fruits and water. We recommend starting the path to a healthy diet with detox.'
    contentTextYoga.textContent = 'A healthy diet includes fruits, vegetables, legumes, nuts, fish, and(or) meat'
}
function DetoxSelection (){
    if(contentContainerCheckDetox.checked){
        mainContainer.replaceChild(contentContainerDetox, contentContainerFoodSelection);
        contentContainerDetox.classList.add('regestration_block_show');
    }
}
function DetoxSelectionCheck (){
    if(contentContainerCheckDetox.checked){
        mainContainer.replaceChild(contentContainerDetox, contentContainerFoodSelection);
    }
}
function SimpleFoodSelection (){
    if(contentContainerCheckSimpleFood.checked){
        mainContainer.replaceChild(contentContainerSimpleMenu, contentContainerFoodSelection);
        contentContainerSimpleMenu.classList.add('regestration_block_show');
    }
}
function SimpelFoodSelectionCheck (){
    if(contentContainerCheckDetox.checked){
        mainContainer.replaceChild(contentContainerSimpleMenu, contentContainerFoodSelection);
    }
}
function GOBackToTheSelection(){
    mainContainer.replaceChild(contentContainerFoodSelection, contentContainerDetox);
    contentContainerFoodSelection.classList.add('regestration_block_show');
}
function GOBackToTheSelectionFromSimpleMenu (){
    mainContainer.replaceChild(contentContainerFoodSelection, contentContainerSimpleMenu);
    contentContainerFoodSelection.classList.add('regestration_block_show');
}

function CheckingTheCheckboxDetox (){
    if(contentContainerCheckDetox.checked) {
        localStorage.setItem('statDetox', 'true');
    } else {
        localStorage.setItem('statDetox', 'false');
    }
}
function CheckingTheCheckboxSimpleMenu (){
    if(contentContainerCheckSimpleFood.checked) {
        localStorage.setItem('statSimple', 'true');
    } else {
        localStorage.setItem('statSimple','false');
    }
}
getStatus = localStorage.getItem('statDetox');
getStatus == 'true' ? contentContainerCheckDetox.checked = true : console.log('it is not checked');

getStatus = localStorage.getItem('statSimple');
getStatus == 'true' ? contentContainerCheckSimpleFood.checked = true : console.log('it is not checked');

function YogaSelect (){
    mainContainer.replaceChild(contentYogaAppend, contentContainer);
    contentYogaAppend.classList.add('regestration_block_show');
    contentTextFood.textContent = 'Did you know that yoga practice helps us to relax, relieve stress and improve sleep?';
    contentTextYoga.textContent = 'Repeat this exercise at any time when you are free and the effect will surprise you! Love your body and it will respond to you in return.';
}

function ReturnBackToThePreviousPageFromYoga (){
    mainContainer.replaceChild(contentContainer, contentYogaAppend);
    contentContainer.classList.add('regestration_block_show');
    contentTextFood.textContent = 'In the section about food you can find the menu for the day which contains nutritious and healthy meals.';
    contentTextYoga.textContent = 'In the section about sport you can find some yoga practice that will help you cope with stress and make your body fit.';
}

function ReturnBackToThePreviousPageFromContentContainer (){
    mainContainer.replaceChild(contentContainer, contentContainerFoodSelection);
    contentContainer.classList.add('regestration_block_show');
    contentTextFood.textContent = 'In the section about food you can find the menu for the day which contains nutritious and healthy meals.';
    contentTextYoga.textContent = 'In the section about sport you can find some yoga practice that will help you cope with stress and make your body fit.';
}

function ReturnBackFromAccount (){
    location.reload();
}

mainContainerFormForgotUserName.addEventListener('click', ShowForgotUserForm);
mainContainerFormForgotUserInput.addEventListener('keypress', SendForgotUserForm);
mainContainerFormSingUp.addEventListener('click', ChangePage);
mainContainerFormSingUp.addEventListener('click', ShowRegestrationBlock);
mainContainerRegestrationReturnBack.addEventListener('click', ChangePageToThePreviousOne);
mainContainerRegestrationSubmit.addEventListener('click', CheckingForCompletion);
mainContainerRegestrationPasswordEye.addEventListener('click', ShowPassword);
mainContainerRegestrationPassword.addEventListener('keyup', CheckingPasswordsForCompletion);
mainContainerRegestrationPasswordRepeat.addEventListener('keyup', CheckingPasswordsRepeatForCompletion);
mainContainerFormButton.addEventListener('click', LogIn);
contentReturnBack.addEventListener('click',  ReturnBackFromAccount);
contentContainerFood.addEventListener('click', FoodSelection);
contentContainerFood.addEventListener('click', DetoxSelectionCheck);
contentContainerFood.addEventListener('click', SimpleFoodSelection);
contentContainerCheckDetox.addEventListener('click', DetoxSelection);
contentContainerCheckDetox.addEventListener('click', CheckingTheCheckboxDetox);
contentContainerCheckSimpleFood.addEventListener('click', SimpleFoodSelection);
contentContainerCheckSimpleFood.addEventListener('click', CheckingTheCheckboxSimpleMenu);
contentContainerReturnBackToThePreviousPage.addEventListener('click', ReturnBackToThePreviousPageFromContentContainer);
contentContainerReturnBack.addEventListener('click', GOBackToTheSelection);
contentContainerReturnBackToThePreviousPageFromSimpleMenu.addEventListener('click', GOBackToTheSelectionFromSimpleMenu);
contentContainerYoga.addEventListener('click', YogaSelect);
contentContainerReyurnBackFromYoga.addEventListener('click', ReturnBackToThePreviousPageFromYoga);
document.onkeypress = function(event){
    if (event.keyCode == 13){
        LogIn();
        CheckingForCompletion();
    }
}  

main.append(mainContainer);
mainContainer.append(mainContainerDivImg, mainContainerForm);
mainContainerDivImg.append(mainContainerImg);
mainContainerForm.append(mainContainerFormFlex, mainContainerFormSingUp);
mainContainerFormFlex.append(mainContainerFormFlexText, mainContainerFormInputUser, mainContainerFormInputPassword, mainContainerFormMissingEmailWrapper,
                            mainContainerFormButton,mainContainerFormForgotUserName, mainContainerFormForgotUserEmailFormWrapper);
mainContainerFormForgotUserEmailForm.append( mainContainerFormForgotUserText, mainContainerFormForgotUserInput);
mainContainerFormForgotUserEmailFormWrapper.append(mainContainerFormForgotUserEmailForm);
mainContainerFormForgotUserEmailFormAnswer.append(mainContainerFormForgotUserAnswerText);

mainContainerFormRegestration.append(mainContainerFormRegestrationInputFirstName, mainContainerFormRegestrationInputLastName, 
                            mainContainerFormRegestrationInputEmailWrapper,mainContainerFormRegestrationInputDateOfBirth,
                            mainContainerRegestrationCountryDivWrapper, mainContainerRegestrationPassword, mainContainerRegestrationPasswordRepeat, 
                            mainContainerRegestrationPassworMessageWrapper, mainContainerRegestrationPasswordEyeLabel, 
                            mainContainerRegestrationSubmit, mainContainerRegestrationReturnBack);
mainContainerFormRegestrationInputEmailWrapper.append( mainContainerFormRegestrationEmailHint,mainContainerFormRegestrationInputEmail);
mainContainerRegestrationCountryDivWrapper.append(mainContainerRegestrationCountry, mainContainerRegestrationCountryList);
mainContainerRegestrationPasswordEyeLabel.append(mainContainerRegestrationPasswordEye, mainContainerRegestrationPasswordTextLabel);
mainContainerRegestrationCountryList.append(mainContainerRegestrationCountryListBelarus, mainContainerRegestrationCountryListRussia);
mainContainerRegestrationPassworMessageWrapper.append(mainContainerRegestrationPassworMessage);

content.append(contentText, contentTextFood, contentTextYoga, contentReturnBack);
contentContainer.append(contentContainerFood, contentContainerYoga);
contentContainerFood.append(contentContainerFoodText);
contentContainerYoga.append(contentContainerYogaText);
contentYogaAppend.append(contentYogaVideoWrapper);
contentYogaVideoWrapper.append(contentYogaVideo, contentContainerReyurnBackFromYoga);
contentContainerFoodSelection.append(contentContainerFoodSelectionDetoxWrapper,contentContainerDetoxImg, contentContainerFoodSelectionSimpleFoodWrapper, 
                            contentContainerSimpleFoodImg,contentContainerReturnBackToThePreviousPage);
contentContainerFoodSelectionDetoxWrapper.append(contentContainerFoodSelectionDetox,contentContainerCheckDetoxLabel);
contentContainerCheckDetoxLabel.append(contentContainerCheckDetox,contentContainerCheckDetoxText);
contentContainerFoodSelectionSimpleFoodWrapper.append(contentContainerFoodSelectionSimpleFood, contentContainerCheckSimpleFoodLabel);
contentContainerCheckSimpleFoodLabel.append(contentContainerCheckSimpleFood, contentContainerCheckSimpleFoodText);
contentContainerDetox.append(contentContainerDetoxMenu, contentContainerReturnBack);
contentContainerSimpleMenu.append(contentContainerSimpleMenuIMG, contentContainerReturnBackToThePreviousPageFromSimpleMenu);

root.append(main);