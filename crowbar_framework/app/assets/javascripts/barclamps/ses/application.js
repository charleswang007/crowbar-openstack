/**
 * Copyright 2011-2013, Dell
 * Copyright 2013-2014, SUSE LINUX Products GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(function($) {

  $( "#parse_yaml" ).click(function() {
    console.log("SHITBALLS BUTTON PRESSED");
    var raw_yaml = $("#yaml_file").val().trim();
    console.log(raw_yaml);

    var ses_config = YAML.parse(raw_yaml);
    console.log("shitballs", ses_config);


    /* Now that we have the yaml parsed */

    console.log(ses_config.ceph_conf)
    console.log(ses_config.ceph_conf.cinder-backup)
    $("#ceph_conf_cluster_network").val(ses_config.ceph_conf.cluster_network);
    $("#ceph_conf_fsid").val(ses_config.ceph_conf.fsid);
    $("#ceph_conf_mon_host").val(ses_config.ceph_conf.mon_host);
    $("#ceph_conf_mon_initial_members").val(ses_config.ceph_conf.mon_initial_members);
    $("#ceph_conf_public_network").val(ses_config.ceph_conf.public_network);

    $("#cinder_key").val(ses_config.cinder.key);
    $("#cinder_rbd_store_pool").val(ses_config.cinder.rbd_store_pool);
    $("#cinder_rbd_store_user").val(ses_config.cinder.rbd_store_user);

    $("#cinder_backup_key").val(ses_config["cinder-backup"].key);
    $("#cinder_backup_rbd_store_pool").val(ses_config["cinder-backup"].rbd_store_pool);
    $("#cinder_backup_rbd_store_user").val(ses_config["cinder-backup"].rbd_store_user);

    $("#glance_key").val(ses_config.glance.key);
    $("#glance_rbd_store_pool").val(ses_config.glance.rbd_store_pool);
    $("#glance_rbd_store_user").val(ses_config.glance.rbd_store_user);

    $("#nova_rbd_store_pool").val(ses_config.nova.rbd_store_pool);

    $("#radosgw_urls").val(ses_config.radosgw_urls);

  });

});
