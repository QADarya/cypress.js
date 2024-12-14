describe('Проверка авторизации', function () {

   it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/'); // Зашла на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //Ввела корректную почту
        cy.get('#password').type('USER_PASSWORD'); //Вела корректный пароль
        cy.get('.auth__button').click(); // Нажала на кнопку войти
        cy.get('.header__id-text_type_profile').click(); // Нажала на кнопку тренера 
        cy.get('[href="/shop"]').click();  // Нажала на кнопку смены аватара
        cy.get('.available > button').first().click({ force: true }); //Кликаем Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555557'); // Ввела номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //Вела срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввела код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Boom Boom'); //Ввела имя
        cy.get('.pay-btn').click(); // Нажала на кнопку оплатить
        cy.get('#cardnumber').type('56456'); //Ввела код из смс
        cy.get('.payment__submit-button').click(); // Нажала на кнопку Отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Проверяю, что после покупки виден текст
        cy.get('.payment__font-for-success').should('be.visible'); // Проверяю, что текст виден пользователю

        })
   })