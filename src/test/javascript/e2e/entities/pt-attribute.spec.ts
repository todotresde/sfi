import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('PTAttribute e2e test', () => {

    let navBarPage: NavBarPage;
    let pTAttributeDialogPage: PTAttributeDialogPage;
    let pTAttributeComponentsPage: PTAttributeComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load PTAttributes', () => {
        navBarPage.goToEntity('pt-attribute');
        pTAttributeComponentsPage = new PTAttributeComponentsPage();
        expect(pTAttributeComponentsPage.getTitle()).toMatch(/sfiApp.pTAttribute.home.title/);

    });

    it('should load create PTAttribute dialog', () => {
        pTAttributeComponentsPage.clickOnCreateButton();
        pTAttributeDialogPage = new PTAttributeDialogPage();
        expect(pTAttributeDialogPage.getModalTitle()).toMatch(/sfiApp.pTAttribute.home.createOrEditLabel/);
        pTAttributeDialogPage.close();
    });

    it('should create and save PTAttributes', () => {
        pTAttributeComponentsPage.clickOnCreateButton();
        pTAttributeDialogPage.setNameInput('name');
        expect(pTAttributeDialogPage.getNameInput()).toMatch('name');
        pTAttributeDialogPage.save();
        expect(pTAttributeDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class PTAttributeComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-pt-attribute div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PTAttributeDialogPage {
    modalTitle = element(by.css('h4#myPTAttributeLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function (name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function () {
        return this.nameInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
