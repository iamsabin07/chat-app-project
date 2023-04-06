/// <reference types="cypress" />
import React from 'react';

describe('login-test',()=>{

    var baseUrl = Cypress.env('url');

    before(()=>{
        cy.visit('/');
    })

    it('test-login',()=>{
        cy.screenshot();
        // .then((screenshot) => {
        //     cy.task('uploadScreenshot', { filename: 'login.png', screenshot }).then((res)=>{
        //         if(res){
        //             cy.log("File Uploaded Successfully")
        //         }
        //         else{
        //             cy.log("File Upload Failed");
        //         }
        //     });
        //   });
    })
})