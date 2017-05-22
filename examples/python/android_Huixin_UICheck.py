import os
import unittest
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from time import sleep
from selenium import webdriver

# Returns abs path relative to this file and not cwd
PATH = lambda p: os.path.abspath(
    os.path.join(os.path.dirname(__file__), p)
)

class HuiXinAndroidUICheckTests(unittest.TestCase):
    def setUp(self):
        desired_caps = {}
        desired_caps['platformName'] = 'Android'
        desired_caps['platformVersion'] = '5.0'
        desired_caps['deviceName'] = 'mi-note3'
        desired_caps['app'] = PATH(
            '../../../sample-code/apps/ApiDemos/bin/fxchat-ui-release_170509.apk'
        )

        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

    def tearDown(self):
        # end the session
        self.driver.quit()

    def test_Huixin_LoginIn_elements(self):
    	
				el = self.driver.find_element_by_id("com.fxchat:id/et_password")
				sleep(2)
				el.send_keys('bailun1234')
				sleep(5)
				
				el = self.driver.find_element_by_id("com.fxchat:id/btn_login")
				el.click()
				sleep(10)					
				
				el = self.driver.find_element_by_id("com.fxchat:id/maintitle")			
				self.assertIsNotNone(el)										
																							
if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(HuiXinAndroidUICheckTests)
    unittest.TextTestRunner(verbosity=2).run(suite)
