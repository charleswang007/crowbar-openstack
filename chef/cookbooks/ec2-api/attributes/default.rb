# Copyright 2016 SUSE Linux GmbH, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

default["ec2-api"][:db][:database] = "ec2"
default["ec2-api"][:db][:user] = "ec2"
default["ec2-api"][:db][:password] = nil # must be set by wrapper
default["ec2-api"][:user] = "ec2-api"
default["ec2-api"][:group] = "ec2-api"