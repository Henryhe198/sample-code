"""
Simple iOS tests, showing accessing elements and getting/setting text from them.
"""
import unittest
import os
from appium import webdriver
from time import sleep

class SimpleIOSTests(unittest.TestCase):

    def setUp(self):
        # set up appium
        app = os.path.abspath('../../apps/TestApp/build/release-iphonesimulator/RemitChat.app')
        self.driver = webdriver.Remote(
            command_executor='http://127.0.0.1:4723/wd/hub',
            #desired_capabilities={
                #'app': app,
                #'platformName': 'iOS',
                #'platformVersion': '9.3',
                #'deviceName': 'iPhone Simulator',
                #'automationName':'XCUITest',
                #'bundleId':'com.Byron.RemitChat',
                #'udid':'132b62fc7463d48fedb4f0763ad2c3ba9a529238'		
                #'waitForAppScript':'$.delay(5000);$.acceptAlert();'
          # }
            desired_capabilities={
                'app': app,
                'platformName': 'iOS',
                'platformVersion': '10.3.2',
                'deviceName': 'iPhone 5',
                'automationName':'XCUITest',
                'bundleId':'com.Byron.RemitChat',
                'udid':'132b62fc7463d48fedb4f0763ad2c3ba9a529238',
                'noReset':'true'		            
            }
            )
         
    def tearDown(self):
        self.driver.quit()

    def test_RemitChat_Login(self):
    	  
        #el = self.driver.switch_to.alert.accept()
        #sleep(5)
        
        el = self.driver.find_element_by_class_name('XCUIElementTypeTextField')
        el.click()
        sleep(2)
        
        el = self.driver.find_element_by_accessibility_id('清除文本')
        el.click()
        sleep(2)
         	      	  
        el = self.driver.find_element_by_class_name('XCUIElementTypeTextField')
        el.set_value('Jude')
        sleep(2)
                
        el = self.driver.find_element_by_class_name('XCUIElementTypeSecureTextField')
        el.set_value('Bailun1234')
        sleep(2)
        
        el = self.driver.find_element_by_accessibility_id('登 录')
        el.click()
        sleep(10)

        el = self.driver.find_element_by_accessibility_id('搜索')
        self.assertIsNotNone(el)
        
        self.driver.swipe(0,100,250,100,800)
        sleep(2)
                
        self.driver.swipe(19,526,19.526,500)
        sleep(2)
               
        el = self.driver.find_element_by_accessibility_id('帐号管理')
        sleep(3)
        el.click()
        sleep(2)
        
        el = self.driver.find_element_by_accessibility_id('退出登录')
        sleep(3)
        el.click()
        sleep(5)
        
        el = self.driver.find_element_by_accessibility_id('确定退出')
        el.click()
        sleep(5)
        
        el = self.driver.find_element_by_class_name('XCUIElementTypeTextField')
        self.assertIsNotNone(el)

if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(SimpleIOSTests)
    unittest.TextTestRunner(verbosity=2).run(suite)
