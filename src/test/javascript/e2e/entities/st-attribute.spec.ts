import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('STAttribute e2e test', () => {

    let navBarPage: NavBarPage;
    let sTAttributeDialogPage: STAttributeDialogPage;
    let sTAttributeComponentsPage: STAttributeComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load STAttributes', () => {
        navBarPage.goToEntity('st-attribute');
        sTAttributeComponentsPage = new STAttributeComponentsPage();
        expect(sTAttributeComponentsPage.getTitle()).toMatch(/sfiApp.sTAttribute.home.title/);

    });

    it('should load create STAttribute dialog', () => {
        sTAttributeComponentsPage.clickOnCreateButton();
        sTAttributeDialogPage = new STAttributeDialogPage();
        expect(sTAttributeDialogPage.getModalTitle()).toMatch(/sfiApp.sTAttribute.home.createOrEditLabel/);
        sTAttributeDialogPage.close();
    });

    it('should create and save STAttributes', () => {
        sTAttributeComponentsPage.clickOnCreateButton();
        sTAttributeDialogPage.setNameInput('name');
        expect(sTAttributeDialogPage.getNameInput()).toMatch('name');
        sTAttributeDialogPage.save();
        expect(sTAttributeDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class STAttributeComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-st-attribute div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class STAttributeDialogPage {
    modalTitle = element(by.css('h4#mySTAttributeLabel'));
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
