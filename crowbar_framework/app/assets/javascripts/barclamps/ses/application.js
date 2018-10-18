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
    var raw_yaml = $("#yaml_file").val().trim();
    var ses_config = YAML.parse(raw_yaml);

    /* Now that we have the yaml parsed */
    console.log(ses_config.ceph_conf)
    $("#ceph_conf_cluster_network").val(ses_config.ceph_conf.cluster_network);
    $("#ceph_conf_cluster_network").trigger('change');

    $("#ceph_conf_fsid").val(ses_config.ceph_conf.fsid);
    $("#ceph_conf_fsid").trigger('change');

    $("#ceph_conf_mon_host").val(ses_config.ceph_conf.mon_host);
    $("#ceph_conf_mon_host").trigger('change');

    $("#ceph_conf_mon_initial_members").val(ses_config.ceph_conf.mon_initial_members);
    $("#ceph_conf_mon_initial_members").trigger('change');

    $("#ceph_conf_public_network").val(ses_config.ceph_conf.public_network);
    $("#ceph_conf_public_network").trigger('change');

    $("#cinder_key").val(ses_config.cinder.key);
    $("#cinder_key").trigger('change');

    $("#cinder_rbd_store_pool").val(ses_config.cinder.rbd_store_pool);
    $("#cinder_rbd_store_pool").trigger('change');

    $("#cinder_rbd_store_user").val(ses_config.cinder.rbd_store_user);
    $("#cinder_rbd_store_user").trigger('change');

    $("#cinder_backup_key").val(ses_config["cinder-backup"].key);
    $("#cinder_backup_key").trigger('change');

    $("#cinder_backup_rbd_store_pool").val(ses_config["cinder-backup"].rbd_store_pool);
    $("#cinder_backup_rbd_store_pool").trigger('change');

    $("#cinder_backup_rbd_store_user").val(ses_config["cinder-backup"].rbd_store_user);
    $("#cinder_backup_rbd_store_user").trigger('change');

    $("#glance_key").val(ses_config.glance.key);
    $("#glance_key").trigger('change');

    $("#glance_rbd_store_pool").val(ses_config.glance.rbd_store_pool);
    $("#glance_rbd_store_pool").trigger('change');

    $("#glance_rbd_store_user").val(ses_config.glance.rbd_store_user);
    $("#glance_rbd_store_user").trigger('change');

    $("#nova_rbd_store_pool").val(ses_config.nova.rbd_store_pool);
    $("#nova_rbd_store_pool").trigger('change');

    $("#radosgw_urls").val(ses_config.radosgw_urls);
    $("#radosgw_urls").trigger('change');

  });

});
