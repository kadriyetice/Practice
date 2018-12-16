require('../Utilities/CustomLocators.js');
let HomePage=require('../Pages/Home.page.js');
let Base=require('../Utilities/Base.js');
//Database  connection
let pgp=require('pg-promise');
let connectionString=require('../TestData /dbConnection.js');
let queries=require('../TestData /queries.js');


describe('BookIT Home Page test scripts',function(){
    let db=pgp(connectionString);
    let arr=[];
    let username='';
    let pass='';

    var EC = protractor.ExpectedConditions;


    beforeAll(()=>{
        Base.navigateToHome();
    })

    // it("should print out the title",()=>{
    //     expect(browser.getTitle()).toEqual("cybertek-bnb");
    //     browser.getTitle().then((title)=>{
    //         console.log(title);
    //     })
    // })

    // it('should check Sign in text on the Home Page', () => {
    //     expect(HomePage.HomePageLogo.getText()).toEqual("sign in");
    //     HomePage.HomePageLogo.getText().then(text=>{
    //         console.log(text);
    //     })
    // });

    // it('should verify email field', () => {
    //     expect(HomePage.email.isDisplayed()).toBe(true);
    //     HomePage.email.isDisplayed().then(text=>{
    //         console.log(text);
    //     })
    // });

    // it('should verify password field', () => {
    //     expect(HomePage.password.isDisplayed()).toBe(true);
    //     HomePage.password.isDisplayed().then(text=>{
    //         console.log(text);
    //     })
    // });

    // it('should verify email field has "email" place holder', () => {
    //     expect(HomePage.email.getAttribute("placeholder")).toEqual("email");
    //     HomePage.email.getAttribute("placeholder").then(text=>{
    //         console.log(text);
    //     })
    // });

    it('should confirm user inputs', () => {
        db.any(queries.q1)
            .then(result=>{
                arr=result;
            }).catch(error=>{
                console.log(error);
            }).then(()=>{
                arr.forEach(rowObj=>{
                    username=rowObj.email;
                    pass=rowObj.firstname.toLowerCase()+rowObj.lastname.toLowerCase();

                    console.log(username);
                    


                })


            })











    });









})


