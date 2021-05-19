import unittest
from unittest import result
import main_195


class TestMain(unittest.TestCase):
    def setUp(self) -> None:
        return super().setUp()

    def test_do_stuff1(self):
        '''First Test'''
        test_param = 10
        result = main_195.do_stuff(test_param)
        self.assertEqual(result, 15)

    def test_do_stuff2(self):
        test_param = 'Say Hello'
        result = main_195.do_stuff(test_param)
        self.assertIsInstance(result, ValueError)

    def test_do_stuff3(self):
        test_param = None
        result = main_195.do_stuff(test_param)
        self.assertEqual(result, 'Please enter a number')

    def tearDown(self) -> None:
        return super().tearDown()


if __name__ == '__main__':
    unittest.main()
