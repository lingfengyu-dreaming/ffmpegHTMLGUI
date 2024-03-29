// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
; (async () =>
{
  window.addEventListener('DOMContentLoaded', () => { });
})();

function generatecommand()
{
  // 输出命令的textarea
  var outputplace = document.getElementById("outputcommand");
  // 输入文件的地址
  var inputfile = document.getElementById("filesrc").value;
  if (inputfile[0] != "\"")
  {
    inputfile = "\"" + inputfile;
  }
  if (inputfile[inputfile.length - 1] != "\"")
  {
    inputfile += "\"";
  }


  // 输出文件的名字，可以留空
  var outputfile = document.getElementById("outputfilename").value;
  // 输出文件的地址，可以留空
  var outputdir = document.getElementById("outputdir").value;

  // 视频选项
  // 输出视频的分辨率，可以留空
  var videowidth = document.getElementById("videowidth").value;
  var videoheight = document.getElementById("videoheight").value;
  // 输出视频的比特率，可以留空
  var videobyterate = document.getElementById("videobyte").value;
  // 输出视频的帧数，可以留空
  var videofps = document.getElementById("videofps").value;
  // 输出视频的速度，可以留空，注意检查状态
  var videopresent = document.getElementById("videoPresent").value;
  // 输入视频的解码器
  var videodecoder = document.getElementById('videoDecoder').value;
  // 输出视频的编码器
  var videoencoder = document.getElementById("videoEncoder").value;

  // 音频选项
  // 输出音频的编码器
  var audioencoder = document.getElementById("audioEncoder").value;


  // 特殊选项
  // 简略信息
  var shortinfo = document.getElementById("hideMessage").checked;
  // 询问是否覆盖输出目录下的同名文件，选中则不询问
  var overwrite = document.getElementById("overwrite").checked;
  // 选择编码过程中是否显示编码进度
  var showEncodingStatus = document.getElementById("showEncodingStatus").checked;
  // 不输出视频
  var noVideo = document.getElementById("noVideoOut").checked;
  // 不输出音频
  var noAudio = document.getElementById("noAudioOut").checked;


  // 命令的初始部分，后续添加参数
  var command = "ffmpeg ";
  // 这里添加参数
  if (videodecoder)
  {
    // 输入视频解码器
    command += "-hwaccel " + videodecoder + " ";
  }
  if (inputfile)
  {
    // 输入文件
    command += "-i " + inputfile + " ";

    // 必须先写设定参数
    // 输出视频编码器，可以留空
    if (videoencoder)
    {
      command += "-c:v " + videoencoder + " ";
    }
    // 输出音频编码器，可以留空
    if (audioencoder)
    {
      command += "-c:a " + audioencoder + " ";
    }
    // 输出视频分辨率，可以留空
    if (videowidth && videoheight)
    {
      command += "-s " + videowidth + "x" + videoheight + " ";
    }
    // 输出视频比特率，单位kbps，可以留空
    if (videobyterate)
    {
      command += "-b:v " + videobyterate + "k ";
    }
    // 设置输出视频帧数，单位fps，可以留空，默认和原视频一样
    if (videofps)
    {
      command += "-r " + videofps + " ";
    }
    // 设置输出视频速度，可以留空，默认为medium
    if (videopresent)
    {
      command += "-preset " + videopresent + " ";
    }
    // 输出目录存在与输出文件同名的文件时是否覆盖，默认为否，勾选则添加参数
    if (overwrite)
    {
      command += "-y ";
    }
    // 选择编码过程中是否显示编码进度
    if (showEncodingStatus)
    {
      command += "-stats ";
    }


    // 特殊选项
    // 简略信息
    if (shortinfo)
    {
      command += "-hide_banner ";
    }
    // 不输出视频和音频
    if (noVideo && noAudio)
    {
      alert("不输出视频和音频的情况下没有意义，不能执行");
    }
    else
    {
      // 不输出视频
      if (noVideo)
      {
        command += "-vn ";
      }
      // 不输出音频
      if (noAudio)
      {
        command += "-an ";
      }
    }


    // 最后填写输出文件名
    // 如果有填写输出文件名
    if (outputfile)
    {
      // 如果有填写输出文件夹就拼接地址
      if (outputdir)
      {

        if (outputdir[0] != "\"")
        {
          command += "\"";
        }
        if (outputdir[outputdir.length - 1] == "\"")
        {
          outputdir = outputdir.substring(0, outputdir.length - 1);
        }
        command += outputdir;
        if (outputdir[outputdir.length - 1] != "\\")
        {
          command += "\\";
        }
        command += outputfile.split("\\")[outputfile.split("\\").length - 1];
        if (outputfile[outputfile.length - 1] != "\"")
        {
          command += "\"";

        }
      }
      // 没有就不管
      else
      {
        if (inputfile[0] != "\"")
        {
          command += "\"";
        }
        var temp = inputfile.split("\\");
        // 分割文件夹，拼接输出地址
        for (var i = 0; i < temp.length; i++)
        {
          if (i != temp.length - 1)
          {
            command += temp[i] + "\\";
          }
        }
        command += outputfile;
        if (command[command.length - 1] != "\"")
        {
          command += "\"";
        }
      }
    }
    // 如果没有填写输出文件名
    else
    {
      // 如果有填写输出文件夹就拼接地址
      if (outputdir)
      {
        if (outputdir[0] != "\"")
        {
          command += "\"";
        }
        if (outputdir[outputdir.length - 1] == "\"")
        {
          outputdir = outputdir.substring(0, outputdir.length - 1);
        }
        command += outputdir;
        if (outputdir[outputdir.length - 1] != "\\")
        {
          command += "\\";
        }
        var filename = inputfile.split("\\")[inputfile.split("\\").length - 1];
        var temp = filename.split(".");
        // 防止文件名中有.的情况
        for (var i = 0; i < temp.length; i++)
        {
          command += temp[i];
          // console.log(temp[i]);
          if (i == temp.length - 2)
          {
            command += "_ffmpeg.";
          }
          else if (i == temp.length - 1)
          {
            command += " ";
          }
          else
          {
            command += ".";
          }
        }
      }
      // 没有就不管
      else
      {
        var temp = inputfile.split(".");
        // 防止文件名中有.的情况
        for (var i = 0; i < temp.length; i++)
        {
          command += temp[i];
          // console.log(temp[i]);
          if (i == temp.length - 2)
          {
            command += "_ffmpeg.";
          }
          else if (i == temp.length - 1)
          {
            command += " ";
          }
          else
          {
            command += ".";
          }
        }
      }
    }
  }
  // 报错，没有输入文件地址
  else
  {
    alert("请输入文件地址，必须是绝对地址");
  }
  // 输出命令
  outputplace.value = command;
}

/** 
 * copy command to clipboard
 * 复制命令
 */
function clicktocopy()
{
  console.log("clicktocopy");
  var text = document.getElementById("outputcommand").value;
  navigator.clipboard.writeText(text).then(function () { alert("复制成功"); }, function () { alert("复制失败"); });
}

/** 
 * export command to textarea
 * 一键导出
 */
function clicktoexport(width, height, fps, byte)
{
  // 输出命令的textarea
  var outputplace = document.getElementById("outputcommand");
  // 输入文件的地址
  var inputfile = document.getElementById("filesrc").value;


  // 输出文件的名字，可以留空
  var outputfile = document.getElementById("outputfilename").value;
  // 输出文件的地址，可以留空
  var outputdir = document.getElementById("outputdir").value;
  // 输出视频的分辨率
  var videowidth = width;
  var videoheight = height;
  // 输出视频的比特率
  var videobyterate = byte;
  // 输出视频的帧数
  var videofps = fps;


  // 命令的初始部分，后续添加参数
  var command = "ffmpeg ";
  // 这里添加参数
  if (inputfile)
  {
    // 输入文件
    command += "-i " + inputfile + " ";

    // 必须先写设定参数
    // 输出视频分辨率
    command += "-s " + videowidth + "x" + videoheight + " ";
    // 输出视频比特率，单位kbps
    command += "-b:v " + videobyterate + "k ";
    // 设置输出视频帧数，单位fps
    command += "-r " + videofps + " ";

    // 最后填写输出文件名
    // 如果有填写输出文件名
    if (outputfile)
    {
      // 如果有填写输出文件夹就拼接地址
      if (outputdir)
      {
        if (outputdir[0] != "\"")
        {
          command += "\"";
        }
        if (outputdir[outputdir.length - 1] == "\"")
        {
          outputdir = outputdir.substring(0, outputdir.length - 1);
        }
        command += outputdir;
        if (outputdir[outputdir.length - 1] != "\\")
        {
          command += "\\";
        }
        command += outputfile.split("\\")[outputfile.split("\\").length - 1];
        if (outputfile[outputfile.length - 1] != "\"")
        {
          command += "\"";
        }

      }
      // 没有就不管
      else
      {
        if (inputfile[0] != "\"")
        {
          command += "\"";
        }
        var temp = inputfile.split("\\");
        // 分割文件夹，拼接输出地址
        for (var i = 0; i < temp.length; i++)
        {
          if (i != temp.length - 1)
          {
            command += temp[i] + "\\";
          }
        }
        command += outputfile;
        if (command[command.length - 1] != "\"")
        {
          command += "\"";
        }
      }
    }
    // 如果没有填写输出文件名
    else
    {
      // 如果有填写输出文件夹就拼接地址
      if (outputdir)
      {
        if (outputdir[0] != "\"")
        {
          command += "\"";
        }
        if (outputdir[outputdir.length - 1] == "\"")
        {
          outputdir = outputdir.substring(0, outputdir.length - 1);
        }
        command += outputdir;
        if (outputdir[outputdir.length - 1] != "\\")
        {
          command += "\\";
        }
        var filename = inputfile.split("\\")[inputfile.split("\\").length - 1];
        var temp = filename.split(".");
        // 防止文件名中有.的情况
        for (var i = 0; i < temp.length; i++)
        {
          command += temp[i];
          // console.log(temp[i]);
          if (i == temp.length - 2)
          {
            command += "_ffmpeg.";
          }
          else if (i == temp.length - 1)
          {
            command += " ";
          }
          else
          {
            command += ".";
          }
        }
      }
      // 没有就不管
      else
      {
        var temp = inputfile.split(".");
        // command += temp[0] + "_ffmpeg." + temp[1];
        // 防止文件名中有.的情况
        for (var i = 0; i < temp.length; i++)
        {
          command += temp[i];
          // console.log(temp[i]);
          if (i == temp.length - 2)
          {
            command += "_ffmpeg.";
          }
          else if (i == temp.length - 1)
          {
            command += " ";
          }
          else
          {
            command += ".";
          }
        }
      }
    }
  }
  // 报错，没有输入文件地址
  else
  {
    alert("请输入文件地址，必须是绝对地址");
  }
  // 输出命令
  outputplace.value = command;
}

/** 
 * preset table expand and collapse
 * 预设选项卡展开和收起
 */
function dis()
{
  var dis01 = document.getElementById("dis01");
  var dis02 = document.getElementById("dis02");
  var dis03 = document.getElementById("dis03");
  dis01.hidden = !dis01.hidden;
  dis02.hidden = !dis02.hidden;
  dis03.hidden = !dis03.hidden;
}

/** 
 * click to run command
 *  点击运行，必须使用这个方法运行
 */
function clicktorun()
{
  var command = document.getElementById("outputcommand");
  var result = document.getElementById("CMDresult");
  result.innerHTML = "";
  const { exec } = require("child_process");
  alert(command.value);
  var runt = exec(command.value, (error, stdout, stderr) =>
  {
    if (error)
    {
      alert(error);
    }
    else if (stdout)
    {
      result.value = stdout;
    }
    else if (stderr)
    {
      result.value = stderr;
    }
  });
  runt.on("close", () =>
  {
    runt.kill;
    console.log("kill");
  });
  runt.on("exit", () =>
  {
    runt.kill;
    console.log("kill");
  });
}

/**
 * log supported encoders
 * 查看支持的编码器
 */
function _encoders()
{
  var output = document.getElementById("outputcommand");
  output.value = "ffmpeg -encoders";
}

/**
 * select language
 * 选择语言
 */
function langsel()
{
  trans.langsel();
}