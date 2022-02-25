#!/usr/bin/python
import sys, os
import logging

#logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/myapp/")
os.chdir("/var/www/myapp")

from app import app as application

handler = logging.FileHandler('/var/www/myapp/error.log')
handler.setLevel(logging.ERROR)
application.logger.addHandler(handler)
#appplication.config['PROPAGATE_EXCEPTIONS'] = False
application.debug = True
