import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('MOProduct e2e test', () => {

    let navBarPage: NavBarPage;
    let mOProductDialogPage: MOProductDialogPage;
    let mOProductComponentsPage: MOProductComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load MOProducts', () => {
        navBarPage.goToEntity('mo-product');
        mOProductComponentsPage = new MOProductComponentsPage();
        expect(mOProductComponentsPage.getTitle()).toMatch(/sfiApp.mOProduct.home.title/);

    });

    it('should load create MOProduct dialog', () => {
        mOProductComponentsPage.clickOnCreateButton();
        mOProductDialogPage = new MOProductDialogPage();
        expect(mOProductDialogPage.getModalTitle()).toMatch(/sfiApp.mOProduct.home.createOrEditLabel/);
        mOProductDialogPage.close();
    });

   /* it('should create and save MOProducts', () => {
        mOProductComponentsPage.clickOnCreateButton();
        mOProductDialogPage.setQuantityInput('5');
        expect(mOProductDialogPage.getQuantityInput()).toMatch('5');
        mOProductDialogPage.manufacturinOrderSelectLastOption();
        mOProductDialogPage.productSelectLastOption();
        mOProductDialogPage.save();
        expect(mOProductDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); */

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class MOProductComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-mo-product div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class MOProductDialogPage {
    modalTitle = element(by.css('h4#myMOProductLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    quantityInput = element(by.css('input#field_quantity'));
    manufacturinOrderSelect = element(by.css('select#field_manufacturinOrder'));
    productSelect = element(by.css('select#field_product'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setQuantityInput = function (quantity) {
        this.quantityInput.sendKeys(quantity);
    }

    getQuantityInput = function () {
        return this.quantityInput.getAttribute('value');
    }

    manufacturinOrderSelectLastOption = function () {
        this.manufacturinOrderSelect.all(by.tagName('option')).last().click();
    }

    manufacturinOrderSelectOption = function (option) {
        this.manufacturinOrderSelect.sendKeys(option);
    }

    getManufacturinOrderSelect = function () {
        return this.manufacturinOrderSelect;
    }

    getManufacturinOrderSelectedOption = function () {
        return this.manufacturinOrderSelect.element(by.css('option:checked')).getText();
    }

    productSelectLastOption = function () {
        this.productSelect.all(by.tagName('option')).last().click();
    }

    productSelectOption = function (option) {
        this.productSelect.sendKeys(option);
    }

    getProductSelect = function () {
        return this.productSelect;
    }

    getProductSelectedOption = function () {
        return this.productSelect.element(by.css('option:checked')).getText();
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
