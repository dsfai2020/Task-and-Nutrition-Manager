from flask import Flask
import requests
import json

def test_ping():
    x='http://127.0.0.1:5000/sample'
    assert requests.get(x).json()['Test']=="Success", 'Should pass?'
    assert requests.get(x).json()=={"Test": "Success"}, 'Should pass?'
