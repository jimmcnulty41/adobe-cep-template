export const getManifest = (
    bundleId,
    extensionId,
    hostName,
    hostVersion,
    menuName
) => {
    const fullExtensionId = bundleId + "." + extensionId;
    return `<?xml version='1.0' encoding='UTF-8'?>
<ExtensionManifest ExtensionBundleId="${bundleId}" ExtensionBundleVersion="1.0.0" Version="7.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ExtensionList>
    <Extension Id="${fullExtensionId}" Version="1.0.0" />
  </ExtensionList>
  <ExecutionEnvironment>
    <HostList>
      <Host Name="${hostName}" Version="${hostVersion}" />
    </HostList>
    <LocaleList>
      <Locale Code="All" />
    </LocaleList>
    <RequiredRuntimeList>
      <RequiredRuntime Name="CSXS" Version="7.0" />
    </RequiredRuntimeList>
  </ExecutionEnvironment>
  <DispatchInfoList>
    <Extension Id="${fullExtensionId}">
      <DispatchInfo>
        <Resources>
          <MainPath>./client/index.html</MainPath>
          <ScriptPath>./host/index.jsx</ScriptPath>
          <CEFCommandLine>
            <Parameter>--enable-nodejs</Parameter>
          </CEFCommandLine>
        </Resources>
        <Lifecycle>
          <AutoVisible>true</AutoVisible>
        </Lifecycle>
        <UI>
          <Type>Panel</Type>
          <Menu>${menuName}</Menu>
          <Geometry>
            <Size>
              <Height>500</Height>
              <Width>350</Width>
            </Size>
          </Geometry>
          <Icons />
        </UI>
      </DispatchInfo>
    </Extension>
  </DispatchInfoList>
</ExtensionManifest>
`;
};
