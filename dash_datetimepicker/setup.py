import json
import os
from setuptools import setup

import pypandoc


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

try:
    long_description = pypandoc.convert_file("../README.md", "rst")
except:
    long_description = None

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    long_description=long_description,
    install_requires=[],
    classifiers=[
        "Framework :: Dash",
    ],
)
