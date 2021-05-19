import unittest
from unittest import result
from unittest.main import main

import main_196


class TestMain(unittest.TestCase):
    def test_initput(self):
        answer = 5
        guess = 5
        result = main_196.run_guess(guess, answer)
        self.assertTrue(result)

    def test_init_wrong_guess(self):
        result = main_196.run_guess(5, 0)
        self.assertFalse(result)

    def test_initput_out_off_range(self):
        answer = 5
        guess = 11
        result = main_196.run_guess(guess, answer)
        self.assertFalse(result)

    def test_initput_wrong_type(self):
        answer = 5
        guess = 'abc'

        result = main_196.run_guess(guess, answer)
        self.assertFalse(result)


if __name__ == '__main__':
    unittest.main()
