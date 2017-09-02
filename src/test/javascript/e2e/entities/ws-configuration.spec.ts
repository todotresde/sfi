import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('WSConfiguration e2e test', () => {

    let navBarPage: NavBarPage;
    let wSConfigurationDialogPage: WSConfigurationDialogPage;
    let wSConfigurationComponentsPage: WSConfigurationComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load WSConfigurations', () => {
        navBarPage.goToEntity('ws-configuration');
        wSConfigurationComponentsPage = new WSConfigurationComponentsPage();
        expect(wSConfigurationComponentsPage.getTitle()).toMatch(/sfiApp.wSConfiguration.home.title/);

    });

    it('should load create WSConfiguration dialog', () => {
        wSConfigurationComponentsPage.clickOnCreateButton();
        wSConfigurationDialogPage = new WSConfigurationDialogPage();
        expect(wSConfigurationDialogPage.getModalTitle()).toMatch(/sfiApp.wSConfiguration.home.createOrEditLabel/);
        wSConfigurationDialogPage.close();
    });

   /* it('should create and save WSConfigurations', () => {
        wSConfigurationComponentsPage.clickOnCreateButton();
        wSConfigurationDialogPage.getFirstInput().isSelected().then(function (selected) {
            if (selected) {
                wSConfigurationDialogPage.getFirstInput().click();
                expect(wSConfigurationDialogPage.getFirstInput().isSelected()).toBeFalsy();
            } else {
                wSConfigurationDialogPage.getFirstInput().click();
                expect(wSConfigurationDialogPage.getFirstInput().isSelected()).toBeTruthy();
            }
        });
        wSConfigurationDialogPage.getLastInput().isSelected().then(function (selected) {
            if (selected) {
                wSConfigurationDialogPage.getLastInput().click();
                expect(wSConfigurationDialogPage.getLastInput().isSelected()).toBeFalsy();
            } else {
                wSConfigurationDialogPage.getLastInput().click();
                expect(wSConfigurationDialogPage.getLastInput().isSelected()).toBeTruthy();
            }
        });
        wSConfigurationDialogPage.workStationSelectLastOption();
        wSConfigurationDialogPage.prevWorkStationSelectLastOption();
        wSConfigurationDialogPage.nextWorkStationSelectLastOption();
        // wSConfigurationDialogPage.supplyTypeSelectLastOption();
        // wSConfigurationDialogPage.employeeSelectLastOption();
        wSConfigurationDialogPage.lineSelectLastOption();
        wSConfigurationDialogPage.save();
        expect(wSConfigurationDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); */

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class WSConfigurationComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-ws-configuration div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class WSConfigurationDialogPage {
    modalTitle = element(by.css('h4#myWSConfigurationLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    firstInput = element(by.css('input#field_first'));
    lastInput = element(by.css('input#field_last'));
    workStationSelect = element(by.css('select#field_workStation'));
    prevWorkStationSelect = element(by.css('select#field_prevWorkStation'));
    nextWorkStationSelect = element(by.css('select#field_nextWorkStation'));
    supplyTypeSelect = element(by.css('select#field_supplyType'));
    employeeSelect = element(by.css('select#field_employee'));
    lineSelect = element(by.css('select#field_line'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    getFirstInput = function () {
        return this.firstInput;
    }
    getLastInput = function () {
        return this.lastInput;
    }
    workStationSelectLastOption = function () {
        this.workStationSelect.all(by.tagName('option')).last().click();
    }

    workStationSelectOption = function (option) {
        this.workStationSelect.sendKeys(option);
    }

    getWorkStationSelect = function () {
        return this.workStationSelect;
    }

    getWorkStationSelectedOption = function () {
        return this.workStationSelect.element(by.css('option:checked')).getText();
    }

    prevWorkStationSelectLastOption = function () {
        this.prevWorkStationSelect.all(by.tagName('option')).last().click();
    }

    prevWorkStationSelectOption = function (option) {
        this.prevWorkStationSelect.sendKeys(option);
    }

    getPrevWorkStationSelect = function () {
        return this.prevWorkStationSelect;
    }

    getPrevWorkStationSelectedOption = function () {
        return this.prevWorkStationSelect.element(by.css('option:checked')).getText();
    }

    nextWorkStationSelectLastOption = function () {
        this.nextWorkStationSelect.all(by.tagName('option')).last().click();
    }

    nextWorkStationSelectOption = function (option) {
        this.nextWorkStationSelect.sendKeys(option);
    }

    getNextWorkStationSelect = function () {
        return this.nextWorkStationSelect;
    }

    getNextWorkStationSelectedOption = function () {
        return this.nextWorkStationSelect.element(by.css('option:checked')).getText();
    }

    supplyTypeSelectLastOption = function () {
        this.supplyTypeSelect.all(by.tagName('option')).last().click();
    }

    supplyTypeSelectOption = function (option) {
        this.supplyTypeSelect.sendKeys(option);
    }

    getSupplyTypeSelect = function () {
        return this.supplyTypeSelect;
    }

    getSupplyTypeSelectedOption = function () {
        return this.supplyTypeSelect.element(by.css('option:checked')).getText();
    }

    employeeSelectLastOption = function () {
        this.employeeSelect.all(by.tagName('option')).last().click();
    }

    employeeSelectOption = function (option) {
        this.employeeSelect.sendKeys(option);
    }

    getEmployeeSelect = function () {
        return this.employeeSelect;
    }

    getEmployeeSelectedOption = function () {
        return this.employeeSelect.element(by.css('option:checked')).getText();
    }

    lineSelectLastOption = function () {
        this.lineSelect.all(by.tagName('option')).last().click();
    }

    lineSelectOption = function (option) {
        this.lineSelect.sendKeys(option);
    }

    getLineSelect = function () {
        return this.lineSelect;
    }

    getLineSelectedOption = function () {
        return this.lineSelect.element(by.css('option:checked')).getText();
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
