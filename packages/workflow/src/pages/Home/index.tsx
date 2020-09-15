// libs
import React, { useEffect, useRef } from "react";
import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css"; // CSS render BPMN
import "bpmn-font/dist/css/bpmn-embedded.css"; // CSS render toolkit
import "diagram-js-minimap/assets/diagram-js-minimap.css"; // CSS to show Minimap
import minimapModule from "diagram-js-minimap";
import { diagramXML } from "../../assets/empty.bpmn";
import propertiesPanelModule from "editor-panel";
import propertiesProviderModule from "editor-panel/lib/provider/camunda";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import { Button, Space, Input, message } from "antd";
import {
  UndoOutlined,
  DownloadOutlined,
  RedoOutlined,
  DatabaseOutlined,
  FileOutlined
} from "@ant-design/icons";
import replaceIds from "@bpmn-io/replace-ids";
// others
import {
  download,
  readFile,
  deleteLogo,
  idGenerator,
  emptyBPMN
} from "./utils";
import "../../styles/libs/bpmn.scss";
import "./style.scss";

const BpmnModelerComponent = () => {
  const modeler = useRef({});
  useEffect(() => {
    modeler.current = new Modeler({
      container: "#bpmnview",
      keyboard: {
        bindTo: window
      },
      propertiesPanel: {
        parent: "#propview"
      },
      additionalModules: [
        propertiesPanelModule,
        propertiesProviderModule,
        minimapModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });
    newBpmnDiagram();
  }, [newBpmnDiagram]);

  useEffect(() => {
    deleteLogo();
  });

  const openBpmnDiagram = xml => {
    modeler.current.importXML(xml, error => {
      if (error) {
        message.error("Open file fail!");
        console.log({ error });
      }
      modeler.current.get("minimap").close();
      const canvas = modeler.current.get("canvas");
      canvas.zoom("fit-viewport");
    });
  };

  const newBpmnDiagram = () => {
    openBpmnDiagram(emptyBPMN);
  };

  const handleDeploy = () => {
    try {
      modeler.current.saveXML({ format: true }, (_, xml) => {
        const formData = new FormData();
        const blob = new Blob([xml], { type: "application/octet-stream" });
        formData.append("blob", blob, "testName");
        console.log({ xml, blob });
        fetch("http://localhost:8080/engine-rest/deployment/create", {
          method: "post",
          mode: "no-cors",
          body: formData
        })
          .then(res => res.json())
          .then(result => {
            console.log("Success:", result);
            message.success("Deploy successfully.");
          })
          .catch(error => {
            console.error("Error:", error);
            message.error("Deploy failed.");
          });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDownloadXml = () => {
    try {
      modeler.current.saveXML({ format: true }, (err, xml) => {
        console.log(xml);
        download("xml", xml);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handleRedo = () => {
  //     modeler.current.get('commandStack').redo();
  // };

  //
  // const handleUndo = () => {
  //     modeler.current.get('commandStack').undo();
  // };

  const handleCreateBPMN = () => {
    const progressIDGenerator = replaceIds(diagramXML, idGenerator);
    openBpmnDiagram(progressIDGenerator);
  };

  return (
    <div id="bpmncontainer" className="bpmn-wrapper">
      <div className="bpp-properties-panel-wrapper">
        <div id="propview" className="bpp-properties-panel" />
      </div>
      <div id="bpmnview" className="bpmn-view">
        <Space style={{ marginTop: 5, marginLeft: 5 }}>
          <Input
            type="file"
            onChange={e =>
              readFile({ file: e.target.files[0], cbOnload: openBpmnDiagram })}
          />
          <Button
            type="primary"
            icon={<FileOutlined />}
            onClick={handleCreateBPMN}
            ghost
          />
          <Button
            type="primary"
            icon={<UndoOutlined />}
            onClick={() => modeler.current.get("commandStack").undo()}
          />
          <Button
            type="primary"
            icon={<RedoOutlined />}
            onClick={() => modeler.current.get("commandStack").redo()}
          />
          <Button
            onClick={handleDownloadXml}
            icon={<DownloadOutlined />}
            type="primary"
            ghost
          />
          <Button
            onClick={handleDeploy}
            icon={<DatabaseOutlined />}
            type="primary"
            ghost
          />
        </Space>
      </div>
    </div>
  );
};

export default BpmnModelerComponent;
