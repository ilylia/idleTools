function IsLerserEquip(data) {
    var DmgMin=0, DmgMax=0;
    if (data.DmgMin != null) DmgMin = Number(data.DmgMin);
    if (data.DmgMax != null) DmgMax = Number(data.DmgMax);
    if (data.DmgMinPlus != null) DmgMin += Number(data.DmgMinPlus);
    if (data.DmgMaxPlus != null) DmgMax += Number(data.DmgMaxPlus);
    if (DmgMax > 110) return false;
    if (data.DmgPer != null && Number(data.DmgPer) > 15) return false;
    if (data.DmgLvl != null) return false;

    var Def=0;
    if (data.DefBase != null) Def = Number(data.DefBase);
    if (data.Def != null) Def += Number(data.Def);
    if (data.DefPlus != null) Def += Number(data.DefPlus);
    if (Def > 700) return false;
    if (data.DefPer != null && Number(data.DefPer) > 15) return false;
    if (data.DefLvl != null) return false;
    
    return true;
}
function OneKeyChooseLerser() {
    $('#equip_list_ul .li2').each(function () {
        var eid = $(this).find('.equip_pop').attr('eid');
        var oo = $(this).find('input');
        $.ajax({
            type: 'get',
            url: 'ShowEquipInfo.aspx',
            data: {'eid': eid, 't': '1384947178512'},
            cache: false,
            success: function (data) {
                if (IsLerserEquip(data)) oo.prop('checked', true);
            },
            error: function () {
                alert('error2');
            },
            dataType: 'json'
        })
    });
}
$("#checkall").after('<span> | </span><span id="onekey" class="pointer"><a href="javascript:OneKeyChooseLerser();">一键选中垃圾</a></span>')
