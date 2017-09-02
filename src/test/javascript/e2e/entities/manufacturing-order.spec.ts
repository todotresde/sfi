import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('ManufacturingOrder e2e test', () => {

    let navBarPage: NavBarPage;
    let manufacturingOrderDialogPage: ManufacturingOrderDialogPage;
    let manufacturingOrderComponentsPage: ManufacturingOrderComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load ManufacturingOrders', () => {
        navBarPage.goToEntity('manufacturing-order');
        manufacturingOrderComponentsPage = new ManufacturingOrderComponentsPage();
        expect(manufacturingOrderComponentsPage.getTitle()).toMatch(/sfiApp.manufacturingOrder.home.title/);

    });

    it('should load create ManufacturingOrder dialog', () => {
        manufacturingOrderComponentsPage.clickOnCreateButton();
        manufacturingOrderDialogPage = new ManufacturingOrderDialogPage();
        expect(manufacturingOrderDialogPage.getModalTitle()).toMatch(/sfiApp.manufacturingOrder.home.createOrEditLabel/);
        manufacturingOrderDialogPage.close();
    });

    it('should create and save ManufacturingOrders', () => {
        manufacturingOrderComponentsPage.clickOnCreateButton();
        manufacturingOrderDialogPage.setCodeInput('code');
        expect(manufacturingOrderDialogPage.getCodeInput()).toMatch('code');
        manufacturingOrderDialogPage.setDateInput('2000-12-31');
        expect(manufacturingOrderDialogPage.getDateInput()).toMatch('2000-12-31');
        manufacturingOrderDialogPage.setStatusInput('5');
        expect(manufacturingOrderDialogPage.getStatusInput()).toMatch('5');
        manufacturingOrderDialogPage.setNameInput('name');
        expect(manufacturingOrderDialogPage.getNameInput()).toMatch('name');
        manufacturingOrderDialogPage.save();
        expect(manufacturingOrderDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ManufacturingOrderComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-manufacturing-order div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ManufacturingOrderDialogPage {
    modalTitle = element(by.css('h4#myManufacturingOrderLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    codeInput = element(by.css('input#field_code'));
    dateInput = element(by.css('input#field_date'));
    statusInput = element(by.css('input#field_status'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setCodeInput = function (code) {
        this.codeInput.sendKeys(code);
    }

    getCodeInput = function () {
        return this.codeInput.getAttribute('value');
    }

    setDateInput = function (date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput = function () {
        return this.dateInput.getAttribute('value');
    }

    setStatusInput = function (status) {
        this.statusInput.sendKeys(status);
    }

    getStatusInput = function () {
        return this.statusInput.getAttribute('value');
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
