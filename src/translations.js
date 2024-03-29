const { app } = require('electron');

const trans = {
    // define translations, based on the sequences in the document, `json` format
    translations: {
        "language_select": {
            "en": "Language Select",
            "zh-CN": "语言选择",
            "zh-TW": "語言選擇",
            "ja": "言語選択",
        },
        "general": {
            "language_choose": {
                "en": "Language:",
                "zh-CN": "语言选择：",
                "zh-TW": "語言選擇：",
                "ja": "言語選択：",
            },
            "upload_label": {
                "en": "You can click to upload and select a file, and copy the file address. This does not actually work here:",
                "zh-CN": "你可以点击上传选择文件，并复制文件地址，这里实际上不起作用：",
                "zh-TW": "你可以點擊上傳選擇文件，並複製文件地址，這裏實際上不起作用：",
                "ja": "ファイルを選択して、ファイルのアドレスをコピーして、ここでは実際には機能しません：",
            },
            "file_path_label": {
                "en": "Here is the path of the file you selected. Right-click the file when uploading and select Copy file address, and paste the address into the right text box:",
                "zh-CN": "这里是你选择的文件的路径，请在上传文件时右键文件选择复制文件地址，并将地址粘贴到右边文本框中：",
                "zh-TW": "這裏是你選擇的文件的路徑，請在上傳時右鍵文件選擇複製文件地址，並將地址粘貼到右邊文本框中：",
                "ja": "ここはあなたが選んだファイルのパスです。アップロード時にファイルを右クリックして、ファイルアドレスをコピーし、アドレスを右側のテキストボックスに貼り付けてください：",
            },
            "preset_label": {
                "en": "no need to fill in the settings, one-click export",
                "zh-CN": "无需填写设置，一键导出",
                "zh-TW": "無需填寫設置，一鍵導出",
                "ja": "設定を記入する必要はありません。ワンクリックでエクスポートします",
            },
            "output_dir_label": {
                "en": "Output video folder:",
                "zh-CN": "输出视频文件夹：",
                "zh-TW": "輸出視頻文件夾：",
                "ja": "出力ビデオフォルダ：",
            },
            "output_filename_label": {
                "en": "Output video name:",
                "zh-CN": "输出视频名称：",
                "zh-TW": "輸出視頻名稱：",
                "ja": "出力ビデオ名：",
            },
        },
        "title": {
            "websocket_label": {
                "en": "websocket settings",
                "zh-CN": "websocket设置",
                "zh-TW": "websocket設置",
                "ja": "websocket設定",
            },
            "preset_title": {
                "en": "Preset options",
                "zh-CN": "预设选项",
                "zh-TW": "預設選項",
                "ja": "プリセットオプション",
            },
            "ffmpeg_settings_title": {
                "en": "Here are the FFmpeg settings:",
                "zh-CN": "以下是FFmpeg的参数设置：",
                "zh-TW": "以下是FFmpeg的參數設置：",
                "ja": "以下はFFmpegのパラメータ設定です：",
            },
            "general_settings_title": {
                "en": "General settings",
                "zh-CN": "一般设置",
                "zh-TW": "一般設置",
                "ja": "一般設定",
            },
            "video_settings_title": {
                "en": "Video settings",
                "zh-CN": "视频设置",
                "zh-TW": "視頻設置",
                "ja": "ビデオ設定",
            },
            "audio_settings_title": {
                "en": "Audio settings",
                "zh-CN": "音频设置",
                "zh-TW": "音頻設置",
                "ja": "オーディオ設定",
            },
            "special_settings_label": {
                "en": "Special options",
                "zh-CN": "特殊选项",
                "zh-TW": "特殊選項",
                "ja": "特別なオプション",
            },
            "output_command_title": {
                "en": "Output command",
                "zh-CN": "输出命令",
                "zh-TW": "輸出命令",
                "ja": "出力コマンド",
            },
        },
        "tip": {
            "warning001": {
                "en": "This item is required",
                "zh-CN": "此项必填",
                "zh-TW": "此項必填",
                "ja": "この項目は必須です",
            },
            "ph001": {
                "en": "Paste the file path here",
                "zh-CN": "这里粘贴文件的路径",
                "zh-TW": "這裏粘貼文件的路徑",
                "ja": "ここにファイルのパスを貼り付けます",
            },
            "ph002": {
                "en": "After generating the command, please copy it to the command line and run it, make sure that you have configured the ffmpeg environment and added it to the environment variable",
                "zh-CN": "在生成指令之后请复制到命令行中执行，请确保自己配置好了ffmpeg环境，并且已经添加到了环境变量中",
                "zh-TW": "在生成指令之後請複製到命令行中執行，請確保自己配置好了ffmpeg環境，並且已經添加到了環境變量中",
                "ja": "コマンドを生成した後、コマンドラインにコピーして実行してください。ffmpeg環境を設定し、環境変数に追加していることを確認してください",
            },
            "ph003": {
                "en": "Leave blank the default output in the input video folder",
                "zh-CN": "留空默认在输入视频文件夹输出",
                "zh-TW": "留空默認在輸入視頻文件夾輸出",
                "ja": "空白の場合、入力ビデオフォルダに出力されます",
            },
            "ph004": {
                "en": "Leave blank to add ' _ffmpeg' after the file name",
                "zh-CN": "留空默认在文件名后方加上' _ffmpeg'",
                "zh-TW": "留空默認在文件名後方加上' _ffmpeg'",
                "ja": "空白の場合、ファイル名の後に「_ffmpeg」が追加されます",
            },
            "ph005": {
                "en": "Unit is kbit/s",
                "zh-CN": "单位为kbit/s",
                "zh-TW": "單位為kbit/s",
                "ja": "単位はkbit/sです",
            },
            "ph006": {
                "en": "Unit is fps",
                "zh-CN": "单位为fps",
                "zh-TW": "單位為fps",
                "ja": "単位はfpsです",
            },
            "tip001": {
                "en": "You need to fill in the available folder address, please end with '\\'",
                "zh-CN": "需要填写可用的文件夹地址，请以'\\'结尾",
                "zh-TW": "需要填寫可用的文件夾地址，請以'\\'結尾",
                "ja": "使用可能なフォルダアドレスを入力する必要があります。 '\\'で終了してください",
            },
            "tip002": {
                "en": "Even if you only modify the suffix, you need to fill in the complete file name, including the suffix here",
                "zh-CN": "只修改后缀名也要填写完整文件名，这里的文件名包括后缀名",
                "zh-TW": "只修改後綴名也要填寫完整文件名，這裏的文件名包括後綴名",
                "ja": "拡張子のみを変更しても、ここで拡張子を含む完全なファイル名を入力する必要があります",
            },
            "tip003": {
                "en": "Video resolution, in pixels, format example 1920x1080, can be left blank, leaving blank defaults to the original resolution",
                "zh-CN": "视频分辨率，单位为像素，格式示例1920x1080，可以留空，留空默认原分辨率",
                "zh-TW": "視頻分辨率，單位為像素，格式示例1920x1080，可以留空，留空默認原分辨率",
                "ja": "ビデオ解像度、ピクセル単位、フォーマット例1920x1080、空白の場合はデフォルトで元の解像度になります",
            },
            "tip004": {
                "en": "Video bitrate, in kbit/s, leave blank to let ffmpeg decide",
                "zh-CN": "视频比特率，单位为kbit/s，留空默认由ffmpeg决定",
                "zh-TW": "視頻比特率，單位為kbit/s，留空默認由ffmpeg決定",
                "ja": "ビデオビットレート、kbit/s単位、空白の場合はffmpegが決定します",
            },
            "tip005": {
                "en": "Set video fps, leave blank to default to the same as the original video, unit is fps",
                "zh-CN": "设置视频帧率，不填默认和原视频一样，单位为fps",
                "zh-TW": "設置視頻幀率，不填默認和原視頻一樣，單位為fps",
                "ja": "ビデオフレームレートを設定します。空白の場合は、元のビデオと同じになります。単位はfpsです",
            },
            "tip006": {
                "en": "Select the output video quality, which will affect the video output speed. When it is not selected, no parameters will be added",
                "zh-CN": "指定输出的视频质量，会影响视频输出速度，显示未选择时不会添加参数",
                "zh-TW": "指定輸出的視頻質量，會影響視頻輸出速度，顯示未選擇時不會添加參數",
                "ja": "出力ビデオ品質を選択します。これにより、ビデオの出力速度が変化します。選択されていない場合、パラメータは追加されません",
            },
            "tip007": {
                "en": "This is the video decoder of the input video",
                "zh-CN": "这里的视频解码器是输入的视频解码",
                "zh-TW": "這裏的視頻解碼器是輸入的視頻解碼",
                "ja": "ここでのビデオデコーダは入力ビデオのデコードです",
            },
            "tip008": {
                "en": "Select video encoder, pay attention to whether the video encoder format here is suitable for FFmpeg in your current environment, mouse over the option to view the parameters used",
                "zh-CN": "选择视频编码器，注意了解这里的视频编码器格式是否适用于你当前环境中的FFmpeg，鼠标悬停在选项上可查看使用的参数",
                "zh-TW": "選擇視頻編碼器，注意了解這裏的視頻編碼器格式是否適用於你當前環境中的FFmpeg，鼠標懸停在選項上可查看使用的參數",
                "ja": "ビデオエンコーダを選択します。ここでのビデオエンコーダフォーマットが現在の環境のFFmpegに適しているかどうかに注意してください。オプションにマウスを合わせて使用されるパラメータを表示します",
            },
            "tip009": {
                "en": "Select audio encoder, pay attention to whether the audio encoder format here is suitable for FFmpeg in your current environment, mouse over the option to view the parameters used",
                "zh-CN": "选择音频编码器，注意了解这里的音频编码器格式是否适用于你当前环境中的FFmpeg，鼠标悬停在选项上可查看使用的参数",
                "zh-TW": "選擇音頻編碼器，注意了解這裏的音頻編碼器格式是否適用於你當前環境中的FFmpeg，鼠標懸停在選項上可查看使用的參數",
                "ja": "オーディオエンコーダを選択します。ここでのオーディオエンコーダフォーマットが現在の環境のFFmpegに適しているかどうかに注意してください。オプションにマウスを合わせて使用されるパラメータを表示します",
            },
            "tip010": {
                "en": "When this option is enabled, only the metadata of the video will be displayed, and the encoding progress will not be displayed",
                "zh-CN": "当输出目录存在有与输出的文件同名的文件时询问是否覆盖，启用后不询问自动覆盖",
                "zh-TW": "當輸出目錄存在有與輸出的文件同名的文件時詢問是否覆蓋，啓用後不詢問自動覆蓋",
                "ja": "出力ディレクトリに、出力ファイルと同じ名前のファイルが存在する場合、上書きするかどうかを尋ねます。有効にすると、自動的に上書きされます",
            },
            "tip011": {
                "en": "When this option is enabled, the encoding progress will be displayed during the encoding process",
                "zh-CN": "开启后在编码过程中会显示编码进度",
                "zh-TW": "開啓後在編碼過程中會顯示編碼進度",
                "ja": "有効にすると、エンコード中にエンコード状態が表示されます",
            },
            "tip012": {
                "en": "When this option is enabled, the output video will not be output, only the audio will be output",
                "zh-CN": "启用后不输出视频，只输出音频，建议输出文件为音频格式",
                "zh-TW": "啓用後不輸出視頻，只輸出音頻，建議輸出文件為音頻格式",
                "ja": "有効にすると、ビデオを出力せず、オーディオのみを出力します。出力ファイルはオーディオ形式であることをお勧めします",
            },
            "tip013": {
                "en": "When this option is enabled, the output audio will not be output, only the video will be output, advise the output file to be a video format",
                "zh-CN": "启用后不输出音频，只输出视频，建议输出文件为视频格式",
                "zh-TW": "啓用後不輸出音頻，只輸出視頻，建議輸出文件為視頻格式",
                "ja": "有効にすると、オーディオを出力せず、ビデオのみを出力します。出力ファイルはビデオ形式であることをお勧めします",
            }
        },
        "video": {
            "video_resolution_label": {
                "en": "Video resolution:",
                "zh-CN": "视频分辨率：",
                "zh-TW": "視頻分辨率：",
                "ja": "ビデオ解像度：",
            },
            "video_bitrate_label": {
                "en": "Video bitrate:",
                "zh-CN": "视频比特率：",
                "zh-TW": "視頻比特率：",
                "ja": "ビデオビットレート：",
            },
            "video_fps_label": {
                "en": "Video FPS:",
                "zh-CN": "视频帧数：",
                "zh-TW": "視頻幀數：",
                "ja": "ビデオフレームレート：",
            },
            "video_present_label": {
                "en": "Output video quality",
                "zh-CN": "输出的视频质量",
                "zh-TW": "輸出的視頻質量",
                "ja": "出力ビデオ品質",
            },
            "video_decoder_label": {
                "en": "Select video decoder",
                "zh-CN": "选择视频解码器",
                "zh-TW": "選擇視頻解碼器",
                "ja": "ビデオデコーダを選択",
            },
            "video_encoder_label": {
                "en": "Select video encoder",
                "zh-CN": "选择视频编码器",
                "zh-TW": "選擇視頻編碼器",
                "ja": "ビデオエンコーダを選択",
            },
        },
        "audio": {
            "audio_encoder_label": {
                "en": "Select audio encoder",
                "zh-CN": "选择音频编码器",
                "zh-TW": "選擇音頻編碼器",
                "ja": "オーディオエンコーダを選択",
            },
        },
        "special": {
            "hide_message_label": {
                "en": "Brief information",
                "zh-CN": "简略信息",
                "zh-TW": "簡略信息",
                "ja": "簡略メッセージ",
            },
            "force_overwrite_label": {
                "en": "Force overwrite output file",
                "zh-CN": "强制覆盖输出文件",
                "zh-TW": "强制覆蓋輸出文件",
                "ja": "強制的に出力ファイルを上書きする",
            },
            "show_encoding_status_label": {
                "en": "Show encoding progress",
                "zh-CN": "显示编码进度",
                "zh-TW": "顯示編碼進度",
                "ja": "エンコード状態を表示する",
            },
            "no_video_out_label": {
                "en": "No video output:",
                "zh-CN": "不输出视频：",
                "zh-TW": "不輸出視頻：",
                "ja": "ビデオを出力しない：",
            },
            "no_audio_out_label": {
                "en": "No audio output:",
                "zh-CN": "不输出音频：",
                "zh-TW": "不輸出音頻：",
                "ja": "オーディオを出力しない：",
            },
            "output_command_label": {
                "en": "The generated parameter command is as follows:",
                "zh-CN": "生成的参数命令如下：",
                "zh-TW": "生成的參數命令如下：",
                "ja": "生成されたパラメータコマンドは次のとおりです：",
            },
        },
        "button": {
            "start_websocket_button": {
                "en": "Start websocket",
                "zh-CN": "启动websocket",
                "zh-TW": "啓動websocket",
                "ja": "websocketを起動する",
            },
            "dis_01_button": {
                "en": "[Expand]",
                "zh-CN": "[展开]",
                "zh-TW": "[展開]",
                "ja": "[展開]",
            },
            "dis_02_button": {
                "en": "[Collapse]",
                "zh-CN": "[收起]",
                "zh-TW": "[收起]",
                "ja": "[収縮]",
            },
            "video_present_unselect": {
                "en": "Unselected",
                "zh-CN": "未选择",
                "zh-TW": "未選擇",
                "ja": "未選択",
            },
            "video_decoder_unselect": {
                "en": "Unselected",
                "zh-CN": "未选择",
                "zh-TW": "未選擇",
                "ja": "未選択",
            },
            "video_encoder_unselect": {
                "en": "Unselected",
                "zh-CN": "未选择",
                "zh-TW": "未選擇",
                "ja": "未選択",
            },
            "audio_encoder_unselect": {
                "en": "Unselected",
                "zh-CN": "未选择",
                "zh-TW": "未選擇",
                "ja": "未選択",
            },
            "chose_to_hide_message_label": {
                "en": "Click to enable, only diaplay metadata",
                "zh-CN": "点击启用，只显示元信息",
                "zh-TW": "點擊啓用，只顯示元信息",
                "ja": "クリックして有効にする、メタ情報のみを表示する",
            },
            "chose_to_overwrite_label": {
                "en": "Click to enable",
                "zh-CN": "点击启用",
                "zh-TW": "點擊啓用",
                "ja": "クリックして有効にする",
            },
            "chose_to_show_encoding_status_label": {
                "en": "Click to enable",
                "zh-CN": "点击启用",
                "zh-TW": "點擊啓用",
                "ja": "クリックして有効にする",
            },
            "chose_to_no_video_out": {
                "en": "Click to enable",
                "zh-CN": "点击启用",
                "zh-TW": "點擊啓用",
                "ja": "クリックして有効にする",
            },
            "chose_to_no_audio_out": {
                "en": "Click to enable",
                "zh-CN": "点击启用",
                "zh-TW": "點擊啓用",
                "ja": "クリックして有効にする",
            },
            "show_support_codec_button": {
                "en": "View supported encoders",
                "zh-CN": "查看支持的编码器",
                "zh-TW": "查看支持的編碼器",
                "ja": "サポートされているコーデックを表示する",
            },
            "generate_button": {
                "en": "Click to generate",
                "zh-CN": "点击生成",
                "zh-TW": "點擊生成",
                "ja": "クリックして生成する",
            },
            "copy_button": {
                "en": "Click to copy",
                "zh-CN": "点击复制",
                "zh-TW": "點擊複製",
                "ja": "クリックしてコピーする",
            },
            "run_button": {
                "en": "Click to run",
                "zh-CN": "点击运行",
                "zh-TW": "點擊運行",
                "ja": "クリックして実行する",
            }
        }
    },

    // 语言选择
    langsel(lang = null)
    {
        // console.log(lang);
        if (!lang)
        {
            // get language chosen
            var lang = document.getElementById("lang").value;
        }
        else
        {
            // if get language from browser doesn't exist
            try
            {
                if (!translations['language_select'][lang])
                {
                    lang = 'en';
                }
            }
            catch
            {
                lang = 'en';
            }
        }
        // console.log(lang);
        // set document language
        document.documentElement.lang = lang;
        console.log(translations['language_select'][lang] + ":" + lang);

        // set translations
        // if (translations)
        // {

        // general start
        if (translations['general']['language_choose'][lang])
        {
            document.getElementById("languageChoose").innerHTML = translations['general']['language_choose'][lang];
        }
        else
        {
            document.getElementById("languageChoose").innerHTML = translations['general']['language_choose']['en'];
        }

        if (translations['general']['upload_label'][lang])
        {
            document.getElementById('uploadLabel').innerHTML = translations['general']['upload_label'][lang];
        }
        else
        {
            document.getElementById('uploadLabel').innerHTML = translations['general']['upload_label']['en'];
        }

        if (translations['general']['file_path_label'][lang])
        {
            document.getElementById('fileSrcLabel').innerHTML = translations['general']['file_path_label'][lang];
        }
        else
        {
            document.getElementById('fileSrcLabel').innerHTML = translations['general']['file_path_label']['en'];
        }

        if (translations['general']['preset_label'][lang])
        {
            document.getElementById('presetLabel').innerHTML = translations['general']['preset_label'][lang];
        }
        else
        {
            document.getElementById('presetLabel').innerHTML = translations['general']['preset_label']['en'];
        }

        if (translations['general']['output_dir_label'][lang])
        {
            document.getElementById('outputDirLabel').innerHTML = translations['general']['output_dir_label'][lang];
        }
        else
        {
            document.getElementById('outputDirLabel').innerHTML = translations['general']['output_dir_label']['en'];
        }
        if (translations['general']['output_filename_label'][lang])
        {
            document.getElementById('outputFileNameLabel').innerHTML = translations['general']['output_filename_label'][lang];
        }
        else
        {
            document.getElementById('outputFileNameLabel').innerHTML = translations['general']['output_filename_label']['en'];
        }
        // general end
        // title
        if (translations['title']['websocket_label'][lang])
        {
            document.getElementById("websocketLabel").innerHTML = translations['title']['websocket_label'][lang];
        }
        else
        {
            document.getElementById("websocketLabel").innerHTML = translations['title']['websocket_label']['en'];
        }

        if (translations['title']['preset_title'][lang])
        {
            document.getElementById('presetTitle').innerHTML = translations['title']['preset_title'][lang];
        }
        else
        {
            document.getElementById('presetTitle').innerHTML = translations['title']['preset_title']['en'];
        }

        if (translations['title']['ffmpeg_settings_title'][lang])
        {
            document.getElementById('ffmpegSettingsTitle').innerHTML = translations['title']['ffmpeg_settings_title'][lang];
        }
        else
        {
            document.getElementById('ffmpegSettingsTitle').innerHTML = translations['title']['ffmpeg_settings_title']['en'];
        }

        if (translations['title']['general_settings_title'][lang])
        {
            document.getElementById('generalSettingsTitle').innerHTML = translations['title']['general_settings_title'][lang];
        }
        else
        {
            document.getElementById('generalSettingsTitle').innerHTML = translations['title']['general_settings_title']['en'];
        }

        if (translations['title']['video_settings_title'][lang])
        {
            document.getElementById('videoSettingsTitle').innerHTML = translations['title']['video_settings_title'][lang];
        }
        else
        {
            document.getElementById('videoSettingsTitle').innerHTML = translations['title']['video_settings_title']['en'];
        }

        if (translations['title']['audio_settings_title'][lang])
        {
            document.getElementById('audioSettingsTitle').innerHTML = translations['title']['audio_settings_title'][lang];
        }
        else
        {
            document.getElementById('audioSettingsTitle').innerHTML = translations['title']['audio_settings_title']['en'];
        }

        if (translations['title']['special_settings_label'][lang])
        {
            document.getElementById('specialSettingsLabel').innerHTML = translations['title']['special_settings_label'][lang];
        }
        else
        {
            document.getElementById('specialSettingsLabel').innerHTML = translations['title']['special_settings_label']['en'];
        }

        if (translations['title']['output_command_title'][lang])
        {
            document.getElementById('outputCommandTitle').innerHTML = translations['title']['output_command_title'][lang];
        }
        else
        {
            document.getElementById('outputCommandTitle').innerHTML = translations['title']['output_command_title']['en'];
        }
        // title end
        // tip
        if (translations['tip']['warning001'][lang])
        {
            document.getElementById('warning001').title = translations['tip']['warning001'][lang];
        }
        else
        {
            document.getElementById('warning001').title = translations['tip']['warning001']['en'];
        }

        if (translations['tip']['ph001'][lang])
        {
            document.getElementById('filesrc').placeholder = translations['tip']['ph001'][lang];
        }
        else
        {
            document.getElementById('filesrc').placeholder = translations['tip']['ph001']['en'];
        }

        if (translations['tip']['ph002'][lang])
        {
            document.getElementById('outputcommand').placeholder = translations['tip']['ph002'][lang];
        }
        else
        {
            document.getElementById('outputcommand').placeholder = translations['tip']['ph002']['en'];
        }

        if (translations['tip']['ph003'][lang])
        {
            document.getElementById('outputdir').placeholder = translations['tip']['ph003'][lang];
        }
        else
        {
            document.getElementById('outputdir').placeholder = translations['tip']['ph003']['en'];
        }

        if (translations['tip']['ph004'][lang])
        {
            document.getElementById('outputfilename').placeholder = translations['tip']['ph004'][lang];
        }
        else
        {
            document.getElementById('outputfilename').placeholder = translations['tip']['ph004']['en'];
        }

        if (translations['tip']['ph005'])
        {
            document.getElementById('videobyte').placeholder = translations['tip']['ph005'][lang];
        }
        else
        {
            document.getElementById('videobyte').placeholder = translations['tip']['ph005']['en'];
        }

        if (translations['tip']['ph006'][lang])
        {
            document.getElementById('videofps').placeholder = translations['tip']['ph006'][lang];
        }
        else
        {
            document.getElementById('videofps').placeholder = translations['tip']['ph006']['en'];
        }

        if (translations['tip']['tip001'][lang])
        {
            document.getElementById('tip001').title = translations['tip']['tip001'][lang];
        }
        else
        {
            document.getElementById('tip001').title = translations['tip']['tip001']['en'];
        }

        if (translations['tip']['tip002'][lang])
        {
            document.getElementById('tip002').title = translations['tip']['tip002'][lang];
        }
        else
        {
            document.getElementById('tip002').title = translations['tip']['tip002']['en'];
        }

        if (translations['tip']['tip003'][lang])
        {
            document.getElementById('tip003').title = translations['tip']['tip003'][lang];
        }
        else
        {
            document.getElementById('tip003').title = translations['tip']['tip003']['en'];
        }

        if (translations['tip']['tip004'][lang])
        {
            document.getElementById('tip004').title = translations['tip']['tip004'][lang];
        }
        else
        {
            document.getElementById('tip004').title = translations['tip']['tip004']['en'];
        }

        if (translations['tip']['tip005'][lang])
        {
            document.getElementById('tip005').title = translations['tip']['tip005'][lang];
        }
        else
        {
            document.getElementById('tip005').title = translations['tip']['tip005']['en'];
        }

        if (translations['tip']['tip006'][lang])
        {
            document.getElementById('tip006').title = translations['tip']['tip006'][lang];
        }
        else
        {
            document.getElementById('tip006').title = translations['tip']['tip006']['en'];
        }

        if (translations['tip']['tip007'][lang])
        {
            document.getElementById('tip007').title = translations['tip']['tip007'][lang];
        }
        else
        {
            document.getElementById('tip007').title = translations['tip']['tip007']['en'];
        }

        if (translations['tip']['tip008'][lang])
        {
            document.getElementById('tip008').title = translations['tip']['tip008'][lang];
        }
        else
        {
            document.getElementById('tip008').title = translations['tip']['tip008']['en'];
        }

        if (translations['tip']['tip009'][lang])
        {
            document.getElementById('tip009').title = translations['tip']['tip009'][lang];
        }
        else
        {
            document.getElementById('tip009').title = translations['tip']['tip009']['en'];
        }

        if (translations['tip']['tip010'][lang])
        {
            document.getElementById('tip010').title = translations['tip']['tip010'][lang];
        }
        else
        {
            document.getElementById('tip010').title = translations['tip']['tip010']['en'];
        }

        if (translations['tip']['tip011'][lang])
        {
            document.getElementById('tip011').title = translations['tip']['tip011'][lang];
        }
        else
        {
            document.getElementById('tip011').title = translations['tip']['tip011']['en'];
        }

        if (translations['tip']['tip012'][lang])
        {
            document.getElementById('tip012').title = translations['tip']['tip012'][lang];
        }
        else
        {
            document.getElementById('tip012').title = translations['tip']['tip012']['en'];
        }

        if (translations['tip']['tip013'][lang])
        {
            document.getElementById('tip013').title = translations['tip']['tip013'][lang];
        }
        else
        {
            document.getElementById('tip013').title = translations['tip']['tip013']['en'];
        }
        // tip end
        // video
        if (translations['video']['video_resolution_label'][lang])
        {
            document.getElementById('videoResolutionLabel').innerHTML = translations['video']['video_resolution_label'][lang];
        }
        else
        {
            document.getElementById('videoResolutionLabel').innerHTML = translations['video']['video_resolution_label']['en'];
        }

        if (translations['video']['video_bitrate_label'][lang])
        {
            document.getElementById('videoByteLabel').innerHTML = translations['video']['video_bitrate_label'][lang];
        }
        else
        {
            document.getElementById('videoByteLabel').innerHTML = translations['video']['video_bitrate_label']['en'];
        }

        if (translations['video']['video_fps_label'][lang])
        {
            document.getElementById('videoFpsLabel').innerHTML = translations['video']['video_fps_label'][lang];
        }
        else
        {
            document.getElementById('videoFpsLabel').innerHTML = translations['video']['video_fps_label']['en'];
        }

        if (translations['video']['video_present_label'][lang])
        {
            document.getElementById('videoPresentLabel').innerHTML = translations['video']['video_present_label'][lang];
        }
        else
        {
            document.getElementById('videoPresentLabel').innerHTML = translations['video']['video_present_label']['en'];
        }

        if (translations['video']['video_decoder_label'][lang])
        {
            document.getElementById('videoDecoderLabel').innerHTML = translations['video']['video_decoder_label'][lang];
        }
        else
        {
            document.getElementById('videoDecoderLabel').innerHTML = translations['video']['video_decoder_label']['en'];
        }

        if (translations['video']['video_encoder_label'][lang])
        {
            document.getElementById('videoEncoderLabel').innerHTML = translations['video']['video_encoder_label'][lang];
        }
        else
        {
            document.getElementById('videoEncoderLabel').innerHTML = translations['video']['video_encoder_label']['en'];
        }
        // video end
        // audio
        if (translations['audio']['audio_encoder_label'][lang])
        {
            document.getElementById('audioEncoderLabel').innerHTML = translations['audio']['audio_encoder_label'][lang];
        }
        else
        {
            document.getElementById('audioEncoderLabel').innerHTML = translations['audio']['audio_encoder_label']['en'];
        }
        // audio end
        // special
        if (translations['special']['hide_message_label'][lang])
        {
            document.getElementById('hideMessageLabel').innerHTML = translations['special']['hide_message_label'][lang];
        }
        else
        {
            document.getElementById('hideMessageLabel').innerHTML = translations['special']['hide_message_label']['en'];
        }

        if (translations['special']['force_overwrite_label'][lang])
        {
            document.getElementById("forceOverwriteLabel").innerHTML = translations['special']['force_overwrite_label'][lang];
        }
        else
        {
            document.getElementById("forceOverwriteLabel").innerHTML = translations['special']['force_overwrite_label']['en'];
        }

        if (translations['special']['show_encoding_status_label'][lang])
        {
            document.getElementById('showEncodingStatusLabel').innerHTML = translations['special']['show_encoding_status_label'][lang];
        }
        else
        {
            document.getElementById('showEncodingStatusLabel').innerHTML = translations['special']['show_encoding_status_label']['en'];
        }

        if (translations['special']['no_video_out_label'][lang])
        {
            document.getElementById('noVideoOutLabel').innerHTML = translations['special']['no_video_out_label'][lang];
        }
        else
        {
            document.getElementById('noVideoOutLabel').innerHTML = translations['special']['no_video_out_label']['en'];
        }

        if (translations['special']['no_audio_out_label'][lang])
        {
            document.getElementById('noAudioOutLabel').innerHTML = translations['special']['no_audio_out_label'][lang];
        }
        else
        {
            document.getElementById('noAudioOutLabel').innerHTML = translations['special']['no_audio_out_label']['en'];
        }

        if (translations['special']['output_command_label'][lang])
        {
            document.getElementById('outputCommandLabel').innerHTML = translations['special']['output_command_label'][lang];
        }
        else
        {
            document.getElementById('outputCommandLabel').innerHTML = translations['special']['output_command_label']['en'];
        }
        // special end
        // button
        if (translations['button']['start_websocket_button'][lang])
        {
            document.getElementById('startWSBtn').innerHTML = translations['button']['start_websocket_button'][lang];
        }
        else
        {
            document.getElementById('startWSBtn').innerHTML = translations['button']['start_websocket_button']['en'];
        }

        if (translations['button']['dis_01_button'][lang])
        {
            document.getElementById('dis01').innerHTML = translations['button']['dis_01_button'][lang];
        }
        else
        {
            document.getElementById('dis01').innerHTML = translations['button']['dis_01_button']['en'];
        }

        if (translations['button']['dis_02_button'][lang])
        {
            document.getElementById('dis02').innerHTML = translations['button']['dis_02_button'][lang];
        }
        else
        {
            document.getElementById('dis02').innerHTML = translations['button']['dis_02_button']['en'];
        }

        if (translations['button']['video_present_unselect'][lang])
        {
            document.getElementById('videoPresentUnselect').innerHTML = translations['button']['video_present_unselect'][lang];
        }
        else
        {
            document.getElementById('videoPresentUnselect').innerHTML = translations['button']['video_present_unselect']['en'];
        }

        if (translations['button']['video_decoder_unselect'][lang])
        {
            document.getElementById('videoDecoderUnselect').innerHTML = translations['button']['video_decoder_unselect'][lang];
        }
        else
        {
            document.getElementById('videoDecoderUnselect').innerHTML = translations['button']['video_decoder_unselect']['en'];
        }

        if (translations['button']['video_encoder_unselect'][lang])
        {
            document.getElementById('videoEncoderUnselect').innerHTML = translations['button']['video_encoder_unselect'][lang];
        }
        else
        {
            document.getElementById('videoEncoderUnselect').innerHTML = translations['button']['video_encoder_unselect']['en'];
        }

        if (translations['button']['audio_encoder_unselect'][lang])
        {
            document.getElementById('audioEncoderUnselect').innerHTML = translations['button']['audio_encoder_unselect'][lang];
        }
        else
        {
            document.getElementById('audioEncoderUnselect').innerHTML = translations['button']['audio_encoder_unselect']['en'];
        }

        if (translations['button']['chose_to_hide_message_label'][lang])
        {
            document.getElementById('choseToHideMessageLabel').innerHTML = translations['button']['chose_to_hide_message_label'][lang];
        }
        else
        {
            document.getElementById('choseToHideMessageLabel').innerHTML = translations['button']['chose_to_hide_message_label']['en'];
        }

        if (translations['button']['chose_to_overwrite_label'][lang])
        {
            document.getElementById("choseToOverwriteLabel").innerHTML = translations['button']['chose_to_overwrite_label'][lang];
        }
        else
        {
            document.getElementById("choseToOverwriteLabel").innerHTML = translations['button']['chose_to_overwrite_label']['en'];
        }

        if (translations['button']['chose_to_show_encoding_status_label'][lang])
        {
            document.getElementById('choseToShowEncodingStatusLabel').innerHTML = translations['button']['chose_to_show_encoding_status_label'][lang];
        }
        else
        {
            document.getElementById('choseToShowEncodingStatusLabel').innerHTML = translations['button']['chose_to_show_encoding_status_label']['en'];
        }

        if (translations['button']['chose_to_no_video_out'][lang])
        {
            document.getElementById('choseToNoVideoOut').innerHTML = translations['button']['chose_to_no_video_out'][lang];
        }
        else
        {
            document.getElementById('choseToNoVideoOut').innerHTML = translations['button']['chose_to_no_video_out']['en'];
        }

        if (translations['button']['chose_to_no_audio_out'][lang])
        {
            document.getElementById('choseToNoAudioOut').innerHTML = translations['button']['chose_to_no_audio_out'][lang];
        }
        else
        {
            document.getElementById('choseToNoAudioOut').innerHTML = translations['button']['chose_to_no_audio_out']['en'];
        }

        if (translations['button']['show_support_codec_button'][lang])
        {
            document.getElementById('showSupportedCodecBtn').innerHTML = translations['button']['show_support_codec_button'][lang];
        }
        else
        {
            document.getElementById('showSupportedCodecBtn').innerHTML = translations['button']['show_support_codec_button']['en'];
        }

        if (translations['button']['generate_button'][lang])
        {
            document.getElementById("generateBtn").innerHTML = translations['button']['generate_button'][lang];
        }
        else
        {
            document.getElementById("generateBtn").innerHTML = translations['button']['generate_button']['en'];
        }

        if (translations['button']['copy_button'][lang])
        {
            document.getElementById("copyBtn").innerHTML = translations['button']['copy_button'][lang];
        }
        else
        {
            document.getElementById("copyBtn").innerHTML = translations['button']['copy_button']['en'];
        }

        if (translations['button']['run_button'][lang])
        {
            document.getElementById("runBtn").innerHTML = translations['button']['run_button'][lang];
        }
        else
        {
            document.getElementById("runBtn").innerHTML = translations['button']['run_button']['en'];
        }
        // button end
        // }
    },

    // 在启动时读取用户的语言设置
    translations_load()
    {
        var user_lang = app.getLocaleCountryCode();
        langsel(user_lang);
        try
        {
            if (!translations["language_select"][user_lang])
            {
                user_lang = 'en';
            }
        }
        catch
        {
            user_lang = 'en';
        }
        var select = document.getElementById('lang');
        select.value = user_lang;
    }
};

module.exports = trans;