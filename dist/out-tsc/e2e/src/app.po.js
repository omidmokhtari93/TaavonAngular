import { browser, by, element } from 'protractor';
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return browser.get(browser.baseUrl);
    };
    AppPage.prototype.getTitleText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return AppPage;
}());
export { AppPage };
//# sourceMappingURL=C:/Users/IT2/source/repos/TaavonAngular/TaavonAngular/e2e/src/app.po.js.map