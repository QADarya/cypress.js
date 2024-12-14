describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела корректный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела корректный пароль
        cy.get('#loginButton').click(); //Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации, виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
        
        })


 it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#forgotEmailButton').click(); // Нажала на кнопку Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту
        cy.get('#restoreEmailButton').click(); // Нажала на кнопку Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после отправки кода,виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он виден для пользователя
        
        })

 it('Ввод не корректного пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела корректный логин
        cy.get('#pass').type('iLoveqast25654'); // Ввела не корректный пароль
        cy.get('#loginButton').click(); //Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после ввода не корректного пароля, виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
        })

 it('Ввод не корректного логина', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#mail').type('german@dolnikov38555.ru'); // Ввела  не корректный логин
        cy.get('#pass').type('iiLoveqastudio1'); // Ввела корректный пароль
        cy.get('#loginButton').click(); //Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после ввода не корректного пароля, виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
        })
 it('Ввод почты с ошибкой валидации, без символа @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#mail').type('germandolnikov.ru'); // Ввела  не корректный логин, без символа @
        cy.get('#pass').type('iiLoveqastudio1'); // Ввела корректный пароль
        cy.get('#loginButton').click(); //Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после ввода не корректного пароля без символа @, виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //Есть крестик и он виден для пользователя

        })

  it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки востановить пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Приведение к строчным буквам в логине
        cy.get('#pass').type('iiLoveqastudio1'); // Ввела корректный пароль
        cy.get('#loginButton').click(); //Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации, виден текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя

        })
})