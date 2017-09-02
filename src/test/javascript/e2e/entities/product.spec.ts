import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Product e2e test', () => {

    let navBarPage: NavBarPage;
    let productDialogPage: ProductDialogPage;
    let productComponentsPage: ProductComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Products', () => {
        navBarPage.goToEntity('product');
        productComponentsPage = new ProductComponentsPage();
        expect(productComponentsPage.getTitle()).toMatch(/sfiApp.product.home.title/);

    });

    it('should load create Product dialog', () => {
        productComponentsPage.clickOnCreateButton();
        productDialogPage = new ProductDialogPage();
        expect(productDialogPage.getModalTitle()).toMatch(/sfiApp.product.home.createOrEditLabel/);
        productDialogPage.close();
    });

   /* it('should create and save Products', () => {
        productComponentsPage.clickOnCreateButton();
        productDialogPage.setNameInput('name');
        expect(productDialogPage.getNameInput()).toMatch('name');
        // productDialogPage.supplySelectLastOption();
        productDialogPage.productTypeSelectLastOption();
        productDialogPage.save();
        expect(productDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); */

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ProductComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-product div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProductDialogPage {
    modalTitle = element(by.css('h4#myProductLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    supplySelect = element(by.css('select#field_supply'));
    productTypeSelect = element(by.css('select#field_productType'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function (name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function () {
        return this.nameInput.getAttribute('value');
    }

    supplySelectLastOption = function () {
        this.supplySelect.all(by.tagName('option')).last().click();
    }

    supplySelectOption = function (option) {
        this.supplySelect.sendKeys(option);
    }

    getSupplySelect = function () {
        return this.supplySelect;
    }

    getSupplySelectedOption = function () {
        return this.supplySelect.element(by.css('option:checked')).getText();
    }

    productTypeSelectLastOption = function () {
        this.productTypeSelect.all(by.tagName('option')).last().click();
    }

    productTypeSelectOption = function (option) {
        this.productTypeSelect.sendKeys(option);
    }

    getProductTypeSelect = function () {
        return this.productTypeSelect;
    }

    getProductTypeSelectedOption = function () {
        return this.productTypeSelect.element(by.css('option:checked')).getText();
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
