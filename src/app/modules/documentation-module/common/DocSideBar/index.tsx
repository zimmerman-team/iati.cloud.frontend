// @ts-nocheck
//cc:api documentation module#; navigation - side bar
import React from 'react';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import { Root } from 'app/modules/documentation-module/state/RootModel';
import { getResults } from 'app/modules/documentation-module/common/DocSideBar/utils';
import { CustomLink } from 'app/modules/documentation-module/common/DocSideBar/common/ui/CustomLink';
import { DocsideBarContainer } from 'app/modules/documentation-module/common/DocSideBar/common/ui/DocsideBarContainer';
import { DocsideBarNavList } from 'app/modules/documentation-module/common/DocSideBar/common/ui/DocsideBarNavList';
import { ApiDocSearchBoxContainer } from 'app/modules/documentation-module/common/DocSideBar/common/ui/ApiDocSearchBoxContainer';
import { ApiDocSearchInput } from 'app/modules/documentation-module/common/DocSideBar/common/ui/ApiDocSearchInput';
import { TreeView } from '@material-ui/lab';
import { Folder, FolderOpen } from '@material-ui/icons';
import { TreeItemLink } from './common/TreeItem';
import { LicenseFooter } from './common/ui/LicenseFooter';

export function DocsideBar() {
  const data: Root = useStoreState((state) => state.data && state.data);
  const categories = data && data.collection;
  const [searchVal, setSearchVal] = React.useState('');

  return (
    <DocsideBarContainer>
      <Box height="52px" />
      <ApiDocSearchBoxContainer>
        <ApiDocSearchInput
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <SearchIcon
          css={`
            color: #a1aebd;
          `}
        />
      </ApiDocSearchBoxContainer>
      <Box height="62px" />
      {/* 379px is every pixel above this component*/}
      <div style={{ overflowY: 'auto', height: 'calc(100vh - 379px)' }}>
        <DocsideBarNavList>
          <CustomLink key="Introduction" to="/documentation/">
            Introduction
          </CustomLink>

          <TreeView
            defaultCollapseIcon={<FolderOpen />}
            defaultExpandIcon={<Folder />}
          >
            {categories &&
              getResults(categories.item, searchVal).map((item) => (
                <TreeItemLink
                  item={item}
                  postmanId={item._postman_id}
                  key={item._postman_id}
                >
                  {item.item &&
                    item.item.map((subItem1) => (
                      <TreeItemLink
                        item={subItem1}
                        postmanId={item._postman_id}
                        key={subItem1._postman_id}
                      >
                        {subItem1.item &&
                          subItem1.item.map((subItem2) => (
                            <TreeItemLink
                              item={subItem2}
                              postmanId={item._postman_id}
                              key={subItem2._postman_id}
                            >
                              {subItem2.item &&
                                subItem2.item.map((subItem3) => (
                                  <TreeItemLink
                                    item={subItem3}
                                    postmanId={item._postman_id}
                                    key={subItem3._postman_id}
                                  />
                                ))}
                            </TreeItemLink>
                          ))}
                      </TreeItemLink>
                    ))}
                </TreeItemLink>
              ))}
          </TreeView>
          <LicenseFooter>
            Code licensed under the GNU AGPL. Documentation licensed under CC BY
            3.0.
          </LicenseFooter>
        </DocsideBarNavList>
      </div>
    </DocsideBarContainer>
  );
}
